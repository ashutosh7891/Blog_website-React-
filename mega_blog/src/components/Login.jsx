import React , {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import {Buttons , Input , Logo} from './index'
import {useForm} from 'react-hook-form'





function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()
    //  error handeling
    const [error , setError] = useState(null)


    // login

    const login = async(data) => [
        setError('') // after login we need empty out error field so it does'nt interupt more

        try {

            const session = await authService.login(data)

            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userdata))
                    navigate('/') // home directory

                }
            }
            
        } catch (error) {
            setError(error.message)
            
        }
    ]


    

  return (
    <div className='flex item-center justify-center w-full'>
        <div className= {`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 justifly-center '>
                <span className='inline-block w-full max-w-[100px]'>

                    <Logo width='100%'/>

                </span>

            </div>
            <h2 className='text-center text-2xl font-bold leading-tight '>Sign in to your account</h2>
        </div>
    </div>
  )
}

export default Login