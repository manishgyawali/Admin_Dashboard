import React from "react";
import Chart from "react-google-charts";
import { PiDotsThreeBold, PiGreaterThan } from "react-icons/pi";

const DefaultP = () => {
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
  return (
    <div className=" flex flex-col gap-4 border shadow-2xl   ">
      <div className="bg-white py-5 shadow-sm  ">
        <div className="flex justify-between items-start  w-11/12 mx-auto ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl  font-semibold">Dashboard</h1>
            <h3 className=" text-sm flex items-center gap-2">
              Salessa <PiGreaterThan className="text-sm" /> Dashboard{" "}
              <PiGreaterThan className="text-sm" /> Sales
            </h3>
          </div>
          <button className="px-5 py-2 rounded shadow-2xl mt-5 text-white bg-[#567AED] ">
            Create Report
          </button>
        </div>
      </div>


      <div className="grid grid-cols-3 ">
        <div className="bg-white border flex flex-col gap-5 border-gray-200 rounded-md  p-5 mx-10">
          <div className="flex items-center  justify-between">
            <h1 className="text-sm font-semibold">Daily Sales</h1>
            <PiDotsThreeBold className="text-xl" />
          </div>
          <div>
            <Chart
              chartType="LineChart"
              width="240px"
              height="180px"
              data={Datas}
              options={options}
            />
          </div>
        </div>

        <div className="bg-white border flex flex-col gap-5 border-gray-200 rounded-md  p-5 mx-10">
          <div className="flex items-center  justify-between">
            <h1 className="text-sm font-semibold">Summary</h1>
            <PiDotsThreeBold className="text-xl" />
          </div>
          <div>
            <Chart
              chartType="LineChart"
              width="240px"
              height="180px"
              data={Datas}
              options={options}
            />
          </div>
        </div>
        <div className="bg-white border flex flex-col gap-5 border-gray-200 rounded-md  p-5 mx-10">
          <div className="flex items-center  justify-between">
            <h1 className="text-sm font-semibold">Summary</h1>
            <PiDotsThreeBold className="text-xl" />
          </div>
          <div>
            <Chart
              chartType="LineChart"
              width="240px"
              height="180px"
              data={Datas}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultP;
