import React from "react";
import {
  AiOutlineInbox,
  AiOutlineUser,
  AiOutlineTag,
  AiOutlineStar,
  AiOutlineSend,
  AiOutlineFileText,
  AiOutlineWarning,
  AiOutlineDelete,
} from "react-icons/ai";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const MailBoxP = () => {
  const emails = Array(10).fill({
    name: "Mark Wiyns",
    status: "Money Receipt",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "12:22 PM",
    avatar: "https://via.placeholder.com/40",
  });
  return (
    <div className="bg-[#F3F4F3] pb-10 ">
      <div className="py-12 px-5">
        <h1 className="text-3xl ">Mail Box</h1>
      </div>
      <div className="flex ">
        <div className="w-fit px-5  rounded-md ml-5 bg-white flex flex-col gap-5 ">
          <div>
            <button className="px-10 py-2 rounded shadow-2xl mt-5 text-white bg-[#567AED] ">
              COMPOSE
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="flex items-center gap-3">
              <AiOutlineInbox /> Primary (31)
            </h1>
            <h1 className="flex items-center gap-3">
              <AiOutlineUser /> Social (11)
            </h1>
            <h1 className="flex items-center gap-3">
              <AiOutlineTag /> Promotions (53)
            </h1>
            <h1 className="flex items-center gap-3">
              <AiOutlineStar /> Starred
            </h1>
            <h1 className="flex items-center gap-3">
              <AiOutlineSend /> Sent Mails
            </h1>
            <h1 className="flex items-center gap-3">
              <AiOutlineFileText /> Drafts
            </h1>
            <h1 className="flex items-center gap-3">
              <AiOutlineWarning /> Spam
            </h1>
            <h1 className="flex items-center gap-3">
              <AiOutlineDelete /> Trash
            </h1>
          </div>
        </div>
        <div className="w-9/12 px-10 rounded-md ml-5 bg-white flex flex-col gap-4">
          <div className="flex justify-between py-7 ">
            <h1>Manish Gyawali</h1>
            <div className="relative ">
              <AiOutlineSearch className="absolute left-3 top-2 text-gray-400 mt-1 " />
              <input
                type="text"
                placeholder="Search content here..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Email Table */}
          <div className="bg-white rounded-md  overflow-hidden">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100 text-left text-[#64C5B1]">
                <tr>
                  <th className="p-4"> </th>
                  <th className="p-4"> </th>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Details</th>
                  <th className="p-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500 ">
                {emails.map((email, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4  "
                      />
                    </td>
                    <td className="p-4">
                      <AiOutlineStar className=" text-xl" />
                    </td>
                    <td className="p-4 flex items-center gap-3">
                      <img
                        src={email.avatar}
                        alt={email.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <span>{email.name}</span>
                    </td>
                    <td className="p-4">{email.status}</td>
                    <td className="p-4 truncate max-w-xs">{email.details}</td>
                    <td className="p-4">{email.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center">
              <div className="text-gray-500 py-7">
                <h1>Showing 1 to 10 of 10 entries</h1>
              </div>
              <div className="flex gap-3 items-center group">
                <FaArrowLeft className="text-gray-500 text-sm   " />
                <button className="bg-blue-500 px-3 py-1">1</button>
                <button className="hover:bg-blue-500 px-3 py-2.5 hover:text-white">
                  
                  <FaArrowRight className="text-gray-500 text-sm " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailBoxP;
