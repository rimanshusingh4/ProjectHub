import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function admin() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col h-full w-full bg-black text-white'>
            <h1 className='text-5xl font-semibold p-16 ml-12 text-[#467688]'>Admin View...</h1>
            <div className=' flex flex-col justify-center items-center p-20 text-white bg-slate-800 rounded-sm mx-20'>
                <h1 className='text-2xl font-semibold p-2 ml-12'>Hi, this is admin view and if you want to become an Admin for post your Project and Become a seller.</h1>
                <h1 className='text-2xl font-semibold p-2 ml-12'>Let us see your example works. </h1>
                <h1 className='text-2xl font-semibold p-2 ml-12'> fill the below form along with all the details. And  don't forget to mentione your top works.</h1>
            </div>
            <div className='m-24'>
                <Link to="/admin/adminForm">
                    <button className='text-xl text-white bg-blue-700 p-3 rounded-xl'>Open Form</button>    
                </Link>
            </div>
        <Outlet/>
        </div>
    </div>
  )
}
export default admin