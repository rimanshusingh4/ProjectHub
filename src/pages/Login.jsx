import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex w-full h-screen justify-center items-center bg-slate-400 '>
        <div className='flex flex-col w-1/4 border rounded-md p-4 bg-slate-300'>
            <lable className="text-xl mx-4">Email:</lable>
            <input className='border m-5 p-2 bg-slate-200' type='email' name='email' placeholder='Enter ur Email' />
            <lable className="text-xl mx-4">Password:</lable>
            <input className='border m-5 p-2 bg-slate-200' type='password' name='password' placeholder='Enter ur Fucking Password' />
            <button className='p-2 bg-blue-700 rounded-3xl w-52 ml-16 text-white font-light text-xl'>Submit</button>
            <div className='text-center m-3'>
                <p>Don't have an Account ? <Link to="/register"><span className='text-orange-700'>Register</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login