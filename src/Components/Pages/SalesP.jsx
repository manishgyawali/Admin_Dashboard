import React from 'react';
import { PiGreaterThan } from "react-icons/pi";
import { Chart } from "react-google-charts";

const SalesP = () => {
     const data = [
        ["Jan", "Revenue", { role: "style" }],
        ["Feb", 30, "#64C5B1"], // RGB value
        ["Mar", 39, "#64C5B1"], // English color name
        ["Apr", 19, "#64C5B1"],
        ["May", 30, "color: #64C5B1"], // CSS-style declaration
        ["Jun", 40, "color: #64C5B1"], // CSS-style declaration
        ["Jul", 27, "color: #64C5B1"], // CSS-style declaration
        ["Aug", 18, "color: #64C5B1"], // CSS-style declaration
        ["Sep",35 , "color: #64C5B1"], // CSS-style declaration
        ["Oct", 40, "color: #64C5B1"], // CSS-style declaration
        ["Nov", 20, "color: #64C5B1"], // CSS-style declaration
        ["Dec", 39, "color: #64C5B1"], // CSS-style declaration


    ];
  return (
    <div className='bg-[#64C5B1] flex flex-col gap-10 h-full '>
      <div className='flex justify-between items-start w-11/12 mx-auto pt-5 '>
        <div className='flex flex-col gap-3 '>
          <h1 className='text-2xl text-white font-semibold'>Dashboard</h1>
          <h3 className='text-white text-sm flex items-center gap-2'>
            Salessa <PiGreaterThan className='text-sm' /> Dashboard <PiGreaterThan className='text-sm' /> Sales
          </h3>
        </div>
        <button className='px-5 py-2 rounded shadow-2xl mt-5 text-black bg-white hover:bg-blue-500'>
          Create Report
        </button>
      </div>

      {/* Main Content Section */}
      <div className='relative w-11/12 mx-auto bg-white rounded-lg shadow-md '>
        {/* Revenue Section */}
        <div className='absolute top-[-20px] left-0 w-1/2 h-[380px] py-7 px-5 flex flex-col gap-5 bg-white rounded-lg shadow-md border-r border-gray-300'>
         <div className='flex justify-between'>
         <h2 className=' font-semibold '>Revenue</h2>
          <div className='flex justify-between gap-5'>
            <button className='text-sm bg-[#F1F5FA] py-2 px-4 rounded'>This Week</button>
            <button className='text-sm '>Last Week</button>
            <button className='text-sm text-blue-500'>Last Month</button>
          </div>
         </div>
          <div className=' bg-gray-100 rounded-md flex items-center justify-center'>
          <Chart chartType="ColumnChart" width='100%' height='380px' data={data} />
          </div>
        </div>

        {/* Total Sales Unit Section */}
        <div className='absolute top-[-20px] right-0 w-1/2 h-[300px] p-4 bg-white rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Total Sales Unit</h2>
          <div className='h-2/3 bg-gray-100 rounded-md flex items-center justify-center'>
            <p className='text-gray-500'>Total Sales Chart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesP;
