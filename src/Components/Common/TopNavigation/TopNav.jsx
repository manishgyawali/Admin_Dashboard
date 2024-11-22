import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

const TopNav = () => {
  return (
    <nav className=" shadow-lg py-6 px-6 flex items-center justify-between">
  
      <div className="flex items-center gap-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-sm text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-full text-sm  focus:outline-none focus:border-[#64C5B1]"
          />
        </div>
      </div>

      


      <div className="flex items-center gap-6">
        <CiBellOn  className="text-gray-500 text-2xl cursor-pointer" />
        <HiOutlineEnvelope  className="text-gray-500 text-xl cursor-pointer" />
        

        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
