import conf from '../conf/conf'
import { Client, ID , Databases , Storage , Query } from "appwrite";

export class Service{

    client  = new Client;
    Databases;
    bucket; // storage 

    // constructor

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }


    // creating post

    async createPost({title,slug,content,featuredImage,status,userId}){

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log('appwrite service error :: createPost :: error' , error)
        }

    }

    // updating post

    async updatePost(slug, {title,content,featuredImage,status}) {

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log('appwrite service error :: updatePost :: error' , error)
            
        }
    }

    // delete post 

    async deletePost(slug){
        try {
           await this.databases.deleteDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionID,
            slug
            
          )  

          return true;
        } catch (error) {
            console.log('appwrite service error :: deletePost :: error' , error)
            return false;
        }
    }

    // getting post

    async getPost(slug){

        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            
        } catch (error) {
            console.log('appwrite service error :: getPost :: error' , error)
            return false;
        }
    }

    // getting more then one post

    async getPosts(queries = [Query.equal('status' , 'active')]){

        try {

           return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries
            )
            
        } catch (error) {
            console.log('appwrite service error :: getPosts :: error' , error)

        }
    }

    // uploading file

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file


            )
            
        } catch (error) {
            console.log('appwrite service error :: uploadFile :: error' , error)
            return false;
        }
    }

    // delete file

    async deleteFile(fileID){

        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID

            )
            return true;
            
        } catch (error) {
            console.log('appwrite service error :: deleteFile :: error' , error)
            return false
        }
    }

    // geting file preview

     getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileID
        )
     }
}

const service  = new Service

export default service

