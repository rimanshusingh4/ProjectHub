import React from 'react'

function WhyUs() {
  return (
    <>
        <div className='w-full h-auto my-2 flex flex-col'>
            <h1 className='text-3xl font-semibold flex justify-start text-cyan-700'>Why Choose Us ?</h1>
            <div className='w-4/5 flex justify-end'>
              <ul className='p-6'>
                <li className='text-xl py-2'><span className='text-cyan-600 font-semibold'>Quality Projects:</span> Professionally developed projects that are easy to understand and modify.</li>
                <li className='text-xl py-2'><span className='text-cyan-600 font-semibold'>Affordable Pricing:</span> High-quality projects at student-friendly prices.</li>
                <li className='text-xl py-2'><span className='text-cyan-600 font-semibold'>Instant Download:</span>  No waiting! Download your project immediately after purchase.</li>
                <li className='text-xl py-2'><span className='text-cyan-600 font-semibold'>Support:</span>  Need help? Our support team is here to assist you with any questions.</li>
                <li className='text-xl py-2'><span className='text-cyan-600 font-semibold'>Full Source Code:</span> Get access to complete source code, making it easy to learn and customize.</li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default WhyUs