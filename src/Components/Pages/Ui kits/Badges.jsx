import React from 'react'

const Badges = () => {

 
  return (
    <div className='bg-red'>
      <div className='bg-white p-10 flex flex-col gap-3'>
        <h1>Badge 1</h1>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl'>Example heading <span className='bg-[#2E9DE4] text-white rounded-md px-4 '>New</span></h1>
          <h1 className='text-2xl'>Example heading <span className='bg-[#2E9DE4] text-white rounded-md px-4 '>New</span></h1>
          <h1 className='text-xl'>Example heading <span className='bg-[#2E9DE4] text-white rounded-md px-4 '>New</span></h1>
          <h1 className='text-md'>Example heading <span className='bg-[#2E9DE4] text-white rounded-md px-4 '>New</span></h1>
          <h1 className='text-sm'>Example heading <span className='bg-[#2E9DE4] text-white rounded-md px-4 '>New</span></h1>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-5 p-10'>
        <div className=' gap-4'>
        <h1>Badge 1</h1>
        <button className='bg-[#2D1967] px-3 py-2 text-white rounded-md'>Notifications <span className='bg-gray-200 text-white rounded-md px-4 '>4</span></button>

        </div>
        <div className=''>
        <h1>Badge 1</h1>
        <button className='bg-[#2D1967] px-3 py-2 text-white rounded-md'>Notifications <span className='bg-gray-200 text-white rounded-md px-4 '>4</span></button>

        </div>
      </div>
    </div>
  )
}

export default Badges