import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <>
        <div className='w-full h-20 flex border-y'>
            <div className='logo w-1/4 flex justify-center items-center '>
            <NavLink to="/">
                <h1 className='text-4xl font-thin text-cyan-700 cursor-pointer'>Project Hub</h1>
            </NavLink>
            </div>

            <div className='search w-1/2 flex justify-center items-center '>
                <input className='w-3/5 border-2 rounded-xl px-16 py-3'  placeholder='Search Your Desired Project Here...'/>
                <p className='mx-4 border-2 p-4 rounded-full cursor-pointer'><BsSearch /></p>
            </div>
            
            <div className='login-cart w-1/3 flex justify-around items-center'>
                <div>
                    <NavLink to="/auth/login">
                        <button className='border-2 p-3 px-12 rounded-full'>Login</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/auth/register">
                        <button className='border-2 p-3  px-12 rounded-full'>SignUp</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}
export default Navbar