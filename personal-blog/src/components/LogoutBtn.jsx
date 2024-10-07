import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { logout } from '../store/authSlice'


function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler =()=>{
    authservice.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
   <button onClick={logoutHandler} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
  )
}

export default LogoutBtn
