import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { PiDotsThreeBold } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";

const BorderP = () => {
  const borderData = [
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
    {
      title: "To Do",
      title1: "Mobile Account Setting",
      title2: "Mobile App",
      amount: "0/5",
      comments: "3",
    },
  ];
  return (
    <div className="bg-[#EDF1F3] py-5">
      <div className="bg-white  flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">
        <div className="grid grid-cols-3 gap-5 ">
          {borderData.map((val, i) => (
            <div key={i} className="bg-[#F1F5FA] px-10 py-2">
              <div className="flex justify-between py-4">
                <h1 className="font-semibold">{val.title}</h1>
                <PiDotsThreeBold className="text-gray-400" />
              </div>
              <div className="bg-white flex flex-col gap-3 px-10 py-4 rounded">
                <div className="flex justify-between">
                  <FaRegCircle />
                  <PiDotsThreeBold />
                </div>
                <h1>{val.title1}</h1>
                <h1 className="text-gray-400 text-sm">{val.title2}</h1>
                <div className="flex justify-between text-gray-400">
                  <div className="flex gap-2 items-center">
                    <TfiMenuAlt />
                    <h1>{val.amount}</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <GoComment />
                    <h1>{val.comments}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorderP;
