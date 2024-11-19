import React from "react";

const DatePicker = () => {
 const datepickerData = [
    {
      title: "Default"
    },
      {title: "Selecting multiple dates"},
      {title: "Month selection"},
      {title: "Minimum and maximum dates"},
     { title: "Range of dates"},
      {title: "Disable days of week"},
     { title: "Orientation"},
{      title: "Permanently visible Datepicker"},
   
  ];
  return (
    <div className="bg-[#EDF1F3] py-5">
      <div className="bg-white p-10 flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-sm  font-semibold">Datepicker</h1>
          {datepickerData.map((val, i) => (
            <div key={i} className="flex items-center text-gray-600  px-10 gap-20">
              <h1 className="">{val.title}</h1>
              <input type="date" className="border border-gray-200 rounded " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
