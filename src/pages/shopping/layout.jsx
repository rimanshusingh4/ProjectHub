import React from 'react'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <div className=' flex flex-col bg-white overflow-hidden '>
            {/* common header compo of shoping viwe   */}
    
        <main className='flex flex-col w-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default layout