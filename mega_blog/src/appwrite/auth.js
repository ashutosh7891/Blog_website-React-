import conf from '../conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client()
    account;

    // creating constructor

    constructor() {
        this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client)

    }


    // for creating account
    async createAccount({email,password,name}){
        try {
        const userAccount = await this.account.create(ID.unique(),email,password,name)
        if(userAccount){
            // call another method
            this.login({email,password})
        
        }else{
            return userAccount;
        }
        } catch (error) {
            throw error;
            
        }
    }

    // for login

    async login({email,password}) {
        try {
            return await this.account.createEmailSession(email,password) {
                
            }
            
        } catch (error) {
            throw error;
        }
    }

    // current user

    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log('appwrite service error :: getCurrentUser :: error' , error)
            
        }

        // if you get a problem with try catch then =>
        return null;
    }   
        // logout
    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {

            console.log('appwrite service error :: logout :: error' , error)
            
        }
    }
}

// everytime there is a call new object will be created then it will be easy to get access .

const authService = new AuthService()

export default authService;
