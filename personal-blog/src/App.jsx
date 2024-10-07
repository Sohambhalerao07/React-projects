import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import { Header, Footer } from './components'
import { login,logout } from './store/authSlice'
import './App.css'
import { Outlet } from 'react-router-dom'
import service from './appwrite/appwriteconfig'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
      const[loading,setLoading]=useState(true)
      const dispatch = useDispatch()
      useEffect(() => {
        authservice
        .getCurrentUser()
        .then((user)=>{
            if(user){
                dispatch(login({user}))
            }else{
              dispatch(logout())
            }
        })
        .finally(()=>setLoading(false))
      })

      if(loading){
        return null;  
      }
      return(
        <>
        <div className='min-h-screen flex flex-col justify-between bg-gray-400'>
          <div className=' text-justify '>
           <Header/>
            <main>
              <Outlet/>
            </main>
            <Footer/>
          </div>
        </div>
        </>
      )
}

export default App
