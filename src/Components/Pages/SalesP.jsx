import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa";
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Assamese", 13],
  ["Bengali", 83],
  ["Bodo", 1.4],
  ["Dogri", 2.3],
  ["Gujarati", 46],
  ["Hindi", 300],
  ["Kannada", 38],
  ["Kashmiri", 5.5],
  ["Konkani", 5],
  ["Maithili", 20],
  ["Malayalam", 33],
  ["Manipuri", 1.5],
  ["Marathi", 72],
  ["Nepali", 2.9],
  ["Oriya", 33],
  ["Punjabi", 29],
  ["Sanskrit", 0.01],
  ["Santhali", 6.5],
  ["Sindhi", 2.5],
  ["Tamil", 61],
  ["Telugu", 74],
  ["Urdu", 52],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};


const SalesP = () => {
   const Datas = [
    [
      { type: "number", label: "x" },
      { type: "number", label: "values" },
      { id: "i0", type: "number", role: "interval" },
      { id: "i1", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
    ],
    [1, 100, 90, 110, 85, 96, 104, 120],
    [2, 120, 95, 130, 90, 113, 124, 140],
    [3, 130, 105, 140, 100, 117, 133, 139],
    [4, 90, 85, 95, 85, 88, 92, 95],
    [5, 70, 74, 63, 67, 69, 70, 72],
    [6, 30, 39, 22, 21, 28, 34, 40],
    [7, 80, 77, 83, 70, 77, 85, 90],
    [8, 100, 90, 110, 85, 95, 102, 110],
  ];
  
   const options = {
    title: "Bar/area interval chart",
    curveType: "function",
    intervals: { color: "series-color" },
    interval: {
      i0: {
        color: "#4374E0",
        style: "bars",
        barWidth: 0,
        lineWidth: 4,
        pointSize: 10,
        fillOpacity: 1,
      },
      i1: {
        color: "#E49307",
        style: "bars",
        barWidth: 0,
        lineWidth: 4,
        pointSize: 10,
        fillOpacity: 1,
      },
      i2: { style: "area", curveType: "function", fillOpacity: 0.3 },
    },
    legend: "none",
  };
  
  const data = [
    ["Jan", "Revenue", { role: "style" }],
    ["Feb", 30, "#64C5B1"],
    ["Mar", 39, "#64C5B1"],
    ["Apr", 19, "#64C5B1"],
    ["May", 30, "color: #64C5B1"],
    ["Jun", 40, "color: #64C5B1"],
    ["Jul", 27, "color: #64C5B1"],
    ["Aug", 18, "color: #64C5B1"],
    ["Sep", 35, "color: #64C5B1"],
    ["Oct", 40, "color: #64C5B1"],
    ["Nov", 20, "color: #64C5B1"],
    ["Dec", 39, "color: #64C5B1"],
  ];

  return (
    <div className=" flex flex-col gap-10  bg-[#F3F4F3] ">
      <div className="bg-[#64C5B1] py-5  ">
        <div className="flex justify-between items-start  w-11/12 mx-auto ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl text-white font-semibold">Dashboard</h1>
            <h3 className="text-white text-sm flex items-center gap-2">
              Salessa <PiGreaterThan className="text-sm" /> Dashboard{" "}
              <PiGreaterThan className="text-sm" /> Sales
            </h3>
          </div>
          <button className="px-5 py-2 rounded shadow-2xl mt-5 text-black bg-white hover:bg-blue-500">
            Create Report
          </button>
        </div>
      </div>
      <div className=" rounded-lg  flex gap-4 px-5">
        {/* Revenue Section */}
        <div className="w-8/12 bg-white rounded-lg shadow-md">
          <div className="flex justify-between pt-5 px-5">
            <h2 className=" font-semibold ">Revenue</h2>
            <div className="flex justify-between gap-5">
              <button className="text-sm bg-[#F1F5FA] py-2 px-4 rounded">
                This Week
              </button>
              <button className="text-sm ">Last Week</button>
              <button className="text-sm text-blue-500">Last Month</button>
            </div>
          </div>
          <div className=" bg-gray-100 rounded-md flex items-center justify-center">
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="380px"
              data={data}
            />
          </div>
        </div>

        {/* Total Sales Unit Section */}
        <div className="w-4/12 h-[460px] p-4 bg-white rounded-lg shadow-md flex flex-col gap-10">
          <h2 className="text-sm font-semibold ">Total Sales Unit</h2>
          <div className="h-2/3 bg-gray-100 rounded-md flex items-center justify-center">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"300px"}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="w-8/12  bg-white rounded-md shadow-md px-10 py-10 flex justify-between ml-5 ">
          <div>
            <h1 className="text-xl font-semibold">
              Download your earnings report
            </h1>
            <p className="text-gray-400 text-sm">
              There are many variations of passages
            </p>
          </div>
          <div>
            <button className="px-5 py-2 rounded shadow-2xl mt-5 text-white bg-[#567AED] ">
              Create Report
            </button>
          </div>
        </div>
        <div className="w-4/12 flex gap-2 px-7 py-5 rounded-md shadow-md  bg-[#323246] mr-4">
          <div>
            <h1 className="text-[#B9E6D5] text-sm">This Month Revenue</h1>
            <h1 className="text-white text-2xl">$57k</h1>
            <div className="flex text-sm gap-5">
              <div className="flex text-[#64C199] items-center gap-1 text-sm">
                <FaArrowUp className="" />
                <h1 className="">14.5%</h1>
              </div>
              <div className="text-[#B9E6D5] grid gap-4 text-sm">
                <h1>Up From </h1>
                <h1>Last Month</h1>
              </div>
            </div>
          </div>
          <div className="opacity-50">
            <h1 className="text-[#B9E6D5] text-sm">This Month Revenue</h1>
            <h1 className="text-white text-2xl">$17k</h1>
            <div className="flex text-sm gap-5 ">
              <div className="flex text-[#64C199] items-center gap-1 text-sm">
                <FaArrowUp className="" />
                <h1 className="">14.5%</h1>
              </div>
              <div className="text-[#B9E6D5] grid gap-4 text-sm">
                <h1>Up From </h1>
                <h1>Last Month</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-5">
        <div className="w-8/12 ">
          <div>
            <h1>Daily Sales</h1>
            <div>
            <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={Datas}
      options={options}
    />
            </div>
          </div>

          <div>
            <h1> Summary</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesP;
