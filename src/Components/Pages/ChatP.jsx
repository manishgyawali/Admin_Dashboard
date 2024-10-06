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

        <div className="bg-white p-5 flex flex-col gap-5  rounded-md ">
          <div>
            <div className="flex gap-3 items-center">
            <img
                  src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-10 h-10 object-cover "
                />
                <div className="grid gap-2 items-center">
                    <h1>Travor James</h1>
                    <h1>Yesterday at 6.33 pm</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatP;
