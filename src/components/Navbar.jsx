import React from 'react'
import Logo from '../../public/logo.png'
import { NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { useAuth } from '@/store/store';
function Navbar() {
    const {isLoggedIn} = useAuth();
    console.log("Hii",isLoggedIn)
  return (
    <>
        <div className='w-full h-20 flex border-y bg-[#467688]'>
            <div className='logo w-1/4 flex justify-center items-center '>
            <NavLink to="/">
                <img className='h-20' src={Logo}  alt='Logo image' />
            </NavLink>
            </div>

            <div className='search w-1/2 flex justify-center items-center '>
                <input className='w-3/5 border-2 rounded-xl px-16 py-3'  placeholder='Search Your Desired Project Here...'/>
                <p className='mx-4 border-2 p-4 rounded-full cursor-pointer'><BsSearch /></p>
            </div>
            
            <div className='login-cart w-1/3 flex justify-around items-center'>
            {isLoggedIn ? (
            <div>
                <NavLink to="/logout">
                    <button className="border-2 p-3 px-12 rounded-full">Logout</button>
                </NavLink>
            </div>
            ) : (
            <>
                <div>
                    <NavLink to="/login">
                        <button className="border-2 p-3 px-12 rounded-full">Login</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/register">
                        <button className="border-2 p-3 px-12 rounded-full">SignUp</button>
                    </NavLink>
                </div>
            </>
            )}

                
                <div>
                    <NavLink to="/admin">
                        <button className='border-2 p-3  px-12 rounded-full'>Admin</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}
export default Navbar