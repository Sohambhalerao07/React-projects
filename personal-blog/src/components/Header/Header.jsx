import React, { act } from "react";
import {Container,Logo,LogoutBtn} from '../index'
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()

    const navItems =[
        {
            name:'Home',
            path:'/',
            active:true
        },
        {
            name:'Login',
            path:'/login',
            active:!authStatus
        },
        {
            name:'Signup',
            path:'/signup',
            active:!authStatus
        },
        {
            name:'Add Posts',
            path:'/add-posts',
            active:!authStatus
        },
    ]
    return (
        <header className="bg-gray-500 text-white py-4 px-6">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to='/'>
                        <Logo width="70">

                        </Logo>
                        </Link>
                    </div>
 
                    <ul className="flex ml-auto">
                        {navItems.map((item)=>(
                            item.active ? (
                            <li key={item.name}>
                                <button onClick={()=>navigate(item.path) }>{item.name}</button>
                            </li>): (null)
                        ))}
                    </ul>
                    {authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}

                </nav>
            </Container>
           
        </header>
    );
}

