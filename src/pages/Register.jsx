import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
function Register() {
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async()=>{
    if(!email) toast.warning("Please, Enter Email!",{autoClose: 1500})
    else if(password.length < 8) toast.warning("Please, Enter Password!", {autoClose: 1500})
    else{
      try {
        const res = await axios.post('http://localhost:4004/api/auth/register', {
          email,
          fullname,
          password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // console.log(res)
        if(res.data.ok) toast.success(`Account Created Successfully!`, {autoClose: 1500})
        // console.log("Response from admin login",res)
      } 
      catch (error) {
        // console.log(error)
        if(error.status === 404) toast.error("User not Found with this email", {autoClose: 1500})
        else if(error.status === 403) toast.error("Incorrect Password", {autoClose: 1500})
        else if(error.status === 501) toast.error("Email Already used", {autoClose: 1500})
        else{
          toast.error("Something wrong, Try Again", {autoClose: 1500})
        }
      }
    }
}
  return (
    <>
      <div className='bg-black h-screen w-full text-white flex flex-col justify-center items-center'>
        <div className='text-white p-8 text-2xl font-medium font-mono'>
          <h1>Register View</h1>
        </div>
        <div className='h-auto w-1/4 border rounded-lg'>
          <div className='flex flex-col justify-start items-start p-4'>
            <h1 className='text-lg font-semibold font-mono'>Login</h1>
            <p className='text-xs py-2'>Welcome back, enter your credentials to continue.</p>
          </div>
          <div className='flex justify-center items-center flex-col  w-full gap-5'>
            <div className='h-auto w-11/12 rounded-xl border p-2 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30'>
              <label className='text-xs h-0 px-2'>Email</label>
              <input className=' h-auto text-xs px-2 w-full outline-none rounded-xl bg-black' 
                type='email' 
                name='email' 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder='Enter your Email'
              />
            </div>
            <div className='h-auto w-11/12 rounded-xl border p-2 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30'>
              <label className='text-xs h-0 px-2'>Full Name</label>
              <input className=' h-auto text-xs px-2 w-full outline-none rounded-xl bg-black' 
                type='text' 
                name='fullname' 
                value={fullname}
                onChange={(e)=>{setFullname(e.target.value)}}
                placeholder='Enter your Full Name'
              />
            </div>
            <div className='h-auto w-11/12 rounded-xl border p-2 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30'>
              <label className='text-xs h-0 px-2'>Password</label>
              <input className=' h-auto text-xs px-2 w-full outline-none rounded-xl bg-black' 
                type='password' 
                name='password' 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder='Enter your Email' 
              />
            </div>
            <div className='flex justify-end w-full px-5'>
              <p className='text-xs'>Forget Passcode ?</p>
            </div>
            <div className='flex justify-end w-full px-5 gap-5 mb-5'>
              <Link to="/login">
                <button className='px-3 py-2 border rounded-lg'>Login</button>
              </Link>
              <button className='px-3 py-2 border rounded-lg bg-white text-black font-semibold' onClick={handleRegister}>Register</button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Register