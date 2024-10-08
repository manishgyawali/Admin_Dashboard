import React from "react";

const Colors = () => {
  return (
    <div className="px-10 bg-[#F3F4F3] flex flex-col gap-7 pb-10 pt-10 ">
      <div className="flex flex-col gap-7 p-10 bg-white rounded-md  ">
        <h1>Color</h1>
        <div className="grid grid-cols-6 gap-5">
          <div className="flex flex-col gap-5 ">
            <div className=" px-0 py-10 bg-[#3F6AD8] rounded-md"></div>
            <h1 className="text-center">Primary</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className=" px-0 py-10 bg-[#2E9DE4] rounded-md"></div>
            <h1 className="text-center">Secondary</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className=" px-0 py-10 bg-[#80CF00] rounded-md"></div>
            <h1 className="text-center">Success</h1>
          </div>
          <div className="flex flex-col gap-5  ">
            <div className=" px-0 py-10 bg-[#FD517D] rounded-md"></div>
            <h1 className="text-center">Danger</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className=" px-0 py-10 bg-[#FFC717] rounded-md"></div>
            <h1 className="text-center">Warning</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className=" px-0 py-10 bg-[#06B5DD] rounded-md"></div>
            <h1 className="text-center">Info</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className=" px-0 py-10 bg-[#a28a8a] rounded-md"></div>
            <h1 className="text-center">Light</h1>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className=" px-0 py-10 bg-[#2C323F] rounded-md"></div>
            <h1 className="text-center">Dark</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white p-10 flex flex-col gap-5 rounded-md">
            <h1 className="font-semibold">Text Color</h1>
            <p className="text-gray-400 text-sm leading-relaxed">Contextual text classes also work well on anchors with the provided hover and focus states. Note that the .text-white and .text-muted class has no additional link styling beyond underline.</p>
            <h1 className="px-5 p-3 text-white bg-[#3F6AD8] rounded-md">Primary link</h1>
            <h1 className="px-5 p-3 text-white bg-[#2E9DE4] rounded-md">Secondary  link</h1>
            <h1 className="px-5 p-3 text-white bg-[#80CF00] rounded-md">Success  link</h1>
            <h1 className="px-5 p-3 text-white bg-[#FD517D] rounded-md">Danger  link</h1>
            <h1 className="px-5 p-3 text-white bg-[#FFC717] rounded-md">Warning  link</h1>
            <h1 className="px-5 p-3 text-white bg-[#06B5DD]  rounded-md">Info  link</h1>
            <h1 className="px-5 p-3 text-white bg-[#2C323F] rounded-md">Dark  link</h1>

        </div>
        <div className="bg-white p-10 flex flex-col gap-5 rounded-md ">
            <h1 className="font-semibold">text link</h1>
            <p className="text-gray-400 text-sm leading-relaxed">Contextual text classes also work well on anchors with the provided hover and focus states. Note that the .text-white and .text-muted class has no additional link styling beyond underline.</p>
            <h1 className=" p-3 w-3/12  text-white bg-[#3F6AD8] rounded-md">Primary link</h1>
            <h1 className=" p-3 text-white  w-4/12 bg-[#2E9DE4] rounded-md">Secondary  link</h1>
            <h1 className=" p-3 text-white  w-3/12 bg-[#80CF00] rounded-md">Success  link</h1>
            <h1 className=" p-3 text-white  w-3/12 bg-[#FD517D] rounded-md">Danger  link</h1>
            <h1 className=" p-3  text-white  w-4/12 bg-[#FFC717] rounded-md">Warning  link</h1>
            <h1 className=" p-3 text-white  w-3/12 bg-[#06B5DD]  rounded-md">Info  link</h1>
            <h1 className=" p-3 text-white  w-3/12 bg-[#2C323F] rounded-md">Dark  link</h1>

        </div>
      </div>
    </div>
  );
};

export default Colors;
