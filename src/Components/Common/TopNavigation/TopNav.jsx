import React from "react";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

const TopNav = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
  
      <div className="flex items-center gap-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-full  focus:outline-none focus:border-[#64C5B1]"
          />
        </div>
      </div>


      <div className="flex items-center gap-6">
        <FaEnvelope className="text-gray-500 text-lg cursor-pointer" />
        <FaBell className="text-gray-500 text-lg cursor-pointer" />
        

        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/40" 
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
