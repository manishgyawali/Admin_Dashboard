import React from "react";

const BasicElementsP = () => {
  const basicelementData = [
    {
      title: "Text",
      text: "Usage type='text'",
      textfield: <input type="text" placeholder="Text input" className="px-3 py-1 border border-gray-400 rounded" />,
    },
    {
      title: "Email",
      text: "Usage type='email'",
      textfield: <input type="email" placeholder="name@example.com" className="px-3 py-1 border border-gray-400 rounded" />,
    },
    {
      title: "Password",
      text: "Usage type='Password'",
      textfield: <input type="password" placeholder="Password" className="px-3 py-1 border border-gray-400 rounded" />,
    },
    {
      title: "number",
      text: "Usage type='number'",
      textfield: <input type="number" placeholder="1" className="px-3 py-1 border border-gray-400 rounded" />,
    },
    {
      title: "search",
      text: "Usage type='search'",
      textfield: <input type="search" placeholder="Search" className="px-3 py-1 border border-gray-400 rounded" />,
    },
    {
      title: "url",
      text: "Usage type='url'",
      textfield: (
        <input
          type="url"
          placeholder="
https://getbootstrap.com
" className="px-3 py-1 border border-gray-400 rounded"
        />
      ),
    },
    {
      title: "tel",
      text: "Usage type='tel'",
      textfield: (
        <input
          type="number"
          placeholder="
      +1 9876543210
      " className="px-3 py-1 border border-gray-400 rounded"
        />
      ),
    },
    {
      title: "file",
      text: "Usage type='file'",
      textfield: <input type="file"  />,
    },
    {
      title: "datetime-local",
      text: "Usage type='datetime-local'",
      textfield: <input type="time" className="px-3 py-1 border border-gray-400 rounded"  />,
    },
    {
      title: "date",
      text: "Usage type='date'",
      textfield: <input type="date" className="px-3 py-1 border border-gray-400 rounded" />,
    },
    {
      title: "time",
      text: "Usage type='time'",
      textfield: <input type="time" className="px-3 py-1 border border-gray-400 rounded" />,
    },
    {
      title: "week",
      text: "Usage type='week'",
      textfield: <input type="week" className="px-3 py-1 border border-gray-400 rounded" />,
    },
  ];
  return (
    <div className="bg-[#EDF1F3] py-5">
      <div className="bg-white p-10 flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">
        <div className="grid grid-cols-3 gap-10 ">
          {basicelementData.map((val, i) => (
            <div className="flex flex-col gap-5">
              <h1 className="text-sm font-semibold">{val.title}</h1>
              <div className="flex flex-col gap-2">
                <h1>{val.text}</h1>
                 {val.textfield}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicElementsP;
