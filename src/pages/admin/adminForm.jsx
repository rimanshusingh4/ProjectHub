import React from 'react'
import { Link } from 'react-router-dom'
function adminForm() {
  return (
        <div className='flex w-full h-full justify-center py-16 text-black'>
                <div className='flex w-1/2 flex-col  border rounded-md p-4 bg-slate-300'>
                    <lable className="text-xl mx-4">Email:</lable>
                    <input className='border m-5 p-2 bg-slate-200' type='email' name='email' placeholder='Enter ur Email' />
                    
                    <lable className="text-xl mx-4">Why you want to become Admin and how many works you have to Post for Sell</lable>
                    <textarea className='border m-5 p-2 bg-slate-200' type='text' name='answer' placeholder='Type your answer' />
                    
                    <lable className="text-xl mx-4">Please Mention your 5 works working Link.</lable>
                    <input className='border m-5 p-2 bg-slate-200' type='text' name='work' placeholder='Type your answer' />
                    <input className='border m-5 p-2 bg-slate-200' type='text' name='work' placeholder='Type your answer' />
                    <input className='border m-5 p-2 bg-slate-200' type='text' name='work' placeholder='Type your answer' />
                    <input className='border m-5 p-2 bg-slate-200' type='text' name='work' placeholder='Type your answer' />
                    <input className='border m-5 p-2 bg-slate-200' type='text' name='work' placeholder='Type your answer' />
                    <div className='flex justify-center items-center'>
                        <button className='flex justify-center items-center p-2 bg-blue-700 rounded-3xl w-52 text-white font-light text-xl'>Submit</button>
                    </div>
                    <div className='text-center m-3'>
                        <p>Want to Login ? <Link to="/admin/adminLogin"><span className='text-orange-700'>adminLogin</span></Link></p>
                        <p>Want to create an Account ? <Link to="/admin/adminRegister"><span className='text-orange-700'>adminRegister</span></Link></p>
                    </div>
                </div>
            </div>
  )
}

export default adminForm