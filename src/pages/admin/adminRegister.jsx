import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function adminRegister() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')

  const handlerRegister = async ()=>{
    // if(!email) toast.warning("Please, Enter Email", {autoClose: 2000})
    // else if(!fullname) toast.warning("Please, Enter Full Name", {autoClose: 2000})
    // else if(password.length < 8) toast.warning("Password should be 8 Digit", {autoClose: 2000})
    // else{
      try {
        const res = await axios.post('http://localhost:4004/api/auth/adminRegister',{
          email,
          fullname,
          password,
        })
        toast.success("Account Created", {autoClose: 1500})
        console.log(res)
        if(res.data.ok){
          setTimeout(()=>{
            Navigate('/admin/adminLogin')
          },2000)
        }
      } catch (error) {
        console.log(error)
        if(error.status === 501) toast.error("Email Already Registered!", {autoClose: 2000})
        if(error.status === 500 || error.status > 501){
          toast("Account not Created, Try Again!", {autoClose: 1500})
        }
      }
    // }
  }
  return (
    <>
      <div className='bg-black h-screen w-full text-white flex flex-col justify-center items-center'>
        <div className='text-white p-8 text-2xl font-medium font-mono'>
          <h1>Admin Register View</h1>
        </div>
        <div className='h-auto w-1/4 border rounded-lg  group relative'>
          <div className='flex flex-col justify-start items-start p-4'>
            <h1 className='text-lg font-semibold font-mono'>Register</h1>
            <p className='text-xs py-2'>Welcome, enter your Information to continue.</p>
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
                placeholder='Enter your Full name'
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
              <Link to="/admin/adminLogin">
                <button className='px-3 py-2 border rounded-lg'>Login</button>
              </Link>
              <button className='px-3 py-2 border rounded-lg bg-white text-black font-semibold' onClick={handlerRegister}>Register</button>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default adminRegister