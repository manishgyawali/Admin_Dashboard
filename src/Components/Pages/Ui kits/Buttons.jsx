import React from 'react'

const Buttons = () => {
  return (
    <div className=" bg-[#EDF1F3] py-5 text-sm ">
      
        <div className="pt-5 pb-14 px-10 bg-white flex  flex-col gap-5 rounded m-10 ">
          <h1 className="font-semibold">Default Buttons</h1>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <div className='flex gap-5 '>
            <button className='text-white  bg-[#2D1967] px-3 py-1 rounded '>Primary</button>
            <button className='text-white  bg-[#5E656C] px-3 py-1 rounded '>Secondary</button>
            <button className='text-white  bg-[#198754] px-3 py-1 rounded '>Success</button>
            <button className='text-white  bg-[#DC3545] px-3 py-1 rounded '>Danger</button>
            <button className='text-white  bg-[#FFC107] px-3 py-1 rounded '>Warning</button>
            <button className='text-white  bg-[#0DCAF0] px-3 py-1 rounded '>Info</button>
            <button className='text-black  bg-white px-3 py-1 rounded '>Light</button>
            <button className='text-white  bg-black px-3 py-1 rounded '>Dark</button>
            <button className='text-blue-400   px-3 py-1 rounded '>Link</button>



          </div>
          </div>
          <div className="pt-5 pb-14 px-10 bg-white flex  flex-col gap-5 rounded m-10 ">
          <h1 className="font-semibold">Default Rounded Buttons</h1>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <div className='flex gap-5 '>
            <button className='text-white  bg-[#2D1967] px-3 py-1 rounded-full '>Primary</button>
            <button className='text-white  bg-[#5E656C] px-3 py-1 rounded-full '>Secondary</button>
            <button className='text-white  bg-[#198754] px-3 py-1 rounded-full '>Success</button>
            <button className='text-white  bg-[#DC3545] px-3 py-1 rounded-full '>Danger</button>
            <button className='text-white  bg-[#FFC107] px-3 py-1 rounded-full '>Warning</button>
            <button className='text-white  bg-[#0DCAF0] px-3 py-1 rounded-full '>Info</button>
            <button className='text-black  bg-white px-3 py-1 rounded-full '>Light</button>
            <button className='text-white  bg-black px-3 py-1 rounded-full '>Dark</button>
            <button className='text-blue-400   px-3 py-1 rounded-full '>Link</button>

          </div>
          </div>
          </div>

  )
}

export default Buttons