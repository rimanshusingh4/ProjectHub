import React from 'react'
import ProjectImg from '../assets/Project.jpg'
function Cards() {
  return (
    <>
        <div className='w-1/4 flex flex-col h-auto border-4 rounded-3xl m-4 shadow-xl'>
            <div className='flex-grow flex items-center justify-center'>
                <div className='w-72 m-4 shadow-2xl'>
                    <img src={ProjectImg} alt='Project'/>
                </div>
            </div>
            <div className='flex items-start p-4'>
                <h1>Project Name</h1>
            </div>
            <div className='flex items-end p-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sequi perferendis numquam a natus similique.</p>
            </div>
            <div className='flex items-end m-4'>
                <button className='p-4 bg-black rounded-3xl w-24 text-white'>Visit </button>
            </div>
        </div>
    </>
  )
}

export default Cards