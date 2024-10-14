import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='flex w-full h-screen justify-center items-center bg-slate-400 '>
        <div className='flex flex-col w-1/4 border rounded-md p-4 bg-slate-300'>
            <h1 className='text-2xl font-semibold'>Register Form</h1>
            <lable className="text-xl mx-4">Email:</lable>
            <input className='border m-5 p-2 bg-slate-200' type='email' name='email' placeholder='Enter ur Email' />
            <lable className="text-xl mx-4">Full Name:</lable>
            <input className='border m-5 p-2 bg-slate-200' type='email' name='email' placeholder='Enter ur Email' />
            <lable className="text-xl mx-4">Password:</lable>
            <input className='border m-5 p-2 bg-slate-200' type='password' name='password' placeholder='Enter ur Fucking Password' />
            <button className='p-2 bg-blue-700 rounded-3xl w-52 ml-16 text-white font-light text-xl'>Submit</button>
            <div className='text-center m-3'>
                <p>Already have an Account ? <Link to="/login"><span className='text-orange-700'>Login</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register