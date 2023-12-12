import React from 'react'
import {useDispactch} from 'react-redux'
import authService from '../../appwrite/config' // getting to take action in this task as logout button has to do some task
import { logout } from '../../store/authSlice'



function LogoutBtn() {

    const dispatch = useDispactch()
    const logoutHandeler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

  return (
    <button className='inline-block  px-6  py-2  duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )

}


export default LogoutBtn