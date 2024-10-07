import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ChatP = () => {
  const chatData = [
    {
      image: `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Travor James",
      text: "I know you are doing great",
      date: "28th Nov",
    },
    {
      image: `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Travor James",
      text: "I know you are doing great",
      date: "28th Nov",
    },
    {
      image: `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Travor James",
      text: "I know you are doing great",
      date: "28th Nov",
    },
    {
      image: `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Travor James",
      text: "I know you are doing great",
      date: "28th Nov",
    },
    {
      image: `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Travor James",
      text: "I know you are doing great",
      date: "28th Nov",
    },
    {
      image: `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Travor James",
      text: "I know you are doing great",
      date: "28th Nov",
    },
    {
      image: `https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Travor James",
      text: "I know you are doing great",
      date: "28th Nov",
    },
  ];
  return (
    <div className="bg-[#F3F4F3] pb-10 ">
      <div className="py-12 px-7">
        <h1 className="text-3xl ">Chat</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white p-8 flex flex-col gap-7 ml-5 rounded-md ">
          <div className="flex flex-col gap-5">
            <h1>Chat List</h1>
            <div className="relative ">
              <AiOutlineSearch className="absolute left-3 top-2 text-gray-400 mt-1 " />
              <input
                type="text"
                placeholder="Search content here..."
                className="pl-10 py-2 px-36 border border-gray-400 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {chatData.map((val, i) => (
              <div
                key={i}
                className="flex items-center gap-8 px-5 py-3 cursor-pointer hover:bg-red-50 transition-all"
              >
                <img
                  src={val.image}
                  alt=""
                  className="w-10 h-10 object-cover "
                />
                <div className="grid items-center gap-2">
                  <h1>{val.name}</h1>
                  <h1 className="text-gray-500 text-sm">{val.text}</h1>
                </div>
                <h1 className="text-gray-400 text-sm">{val.date}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white px-5 pt-8 flex flex-col gap-5  rounded-md ">
          
            <div className="flex gap-3 items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 object-cover "
              />
              <div className="grid gap-1 items-center">
                <h1>Travor James</h1>
                <h1 className="text-gray-400">Yesterday at 6.33 pm</h1>
              </div>
            </div>
            <div className="bg-[#4C6EF8] text-sm rounded-md text-white p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h1>Dear KK,</h1>
                <h1>Thank you for your update.</h1>
              </div>
              <p>We do not sell or share your details without your permission. Find out more in our Privacy Policy. Your username, email and password can be updated via your Codepixar Account settings.</p>
            <h1>Regards,</h1> 
            </div>
            <div className=" gap-3  flex justify-end items-center space-x-4">
             
              <div className="grid gap-1 items-center text-right">
                <h1>Travor James</h1>
                <h1 className="text-gray-400">Yesterday at 6.33 pm</h1>
              </div>
              <img
                src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 object-cover "
              />
            </div>
            <div className="bg-[#F5F6FF] text-sm rounded-md text-gray-500 p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h1>Dear KK,</h1>
                <h1>Thank you for your update.</h1>
              </div>
              <p>We do not sell or share your details without your permission. Find out more in our Privacy Policy. Your username, email and password can be updated via your Codepixar Account settings.</p>
            <h1>Regards,</h1>
            </div>
            <div className="flex justify-between items-center pt-6">
              <input type="text" placeholder="Write your message" className=" border-2 py-2 rounded-md placeholder:text-sm  px-5" />
              <button className="bg-[#4C6EF8] px-10 py-2 rounded-md text-white">Send</button>
            </div>
        
        </div>

        
      </div>
    </div>
  );
};

export default ChatP;
