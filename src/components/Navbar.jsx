import React from 'react'
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <>
        <div className='w-full h-20 border flex'>
            <div className='logo w-1/4 flex justify-center items-center '>
                <h1 className='text-4xl font-thin text-cyan-700 cursor-pointer'>Project Hub</h1>
            </div>

            <div className='search w-1/2 flex justify-center items-center '>
                <input className='w-3/5 border-2 rounded-xl px-16 py-3'  placeholder='Search Your Desired Project Here...'/>
                <p className='mx-4 border-2 p-4 rounded-full cursor-pointer'><BsSearch /></p>
            </div>
            
            <div className='login-cart w-1/3 flex justify-around items-center'>
                <div>
                    <button className='border-2 p-3 px-12 rounded-full'>Login</button>
                </div>
                <div>
                    <button className='border-2 p-3  px-12 rounded-full'>SignUp</button>
                </div>
            </div>
        </div>
    </>
  )
}
export default Navbar