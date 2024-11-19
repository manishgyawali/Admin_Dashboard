import React from "react";

const colors = [
  { hex: "#3F6AD8" },
  { hex: "#2E9DE4" },
  { hex: "#80CF00" },
  { hex: "#06B5DD" },
  { hex: "#FFC717" },
  { hex: "#FD517D" },
  { hex: "#EEEEEE" },
  { hex: "#2C323F" },
];

const StateColor = () => {
  const statecolorData = [
    {
      title: "PRIMARY",
      colors: [
        {
          color: "#8a75dd",
        },
        {
          color: "#8a75dd",
        },
        { color: "#7f68da" },
        { color: "#7a62d8" },
        { color: "#755cd7" },
        { color: "#7056d5" },
        { color: "#6a50d4" },
        { color: "#654ad2" },
      ],
    },
    {
      title: "SECONDARY",
      colors: [
        { color: "#69b9ec" },
        { color: "#64b6eb" },
        { color: "#60b4ea" },
        { color: "#5bb2ea" },
        { color: "#57b0e9" },
        { color: "#52aee9" },
        { color: "#4EACE8" },
        { color: "#49aae8" },
      ],
    },
    {
      title: "SUCCESS",
      colors: [
        { color: "#d7ff97" },
        { color: "#d1ff88" },
        { color: "#ccff78" },
        { color: "#c6ff69" },
        { color: "#c0ff5a" },
        { color: "#b4ff3b" },
        { color: "#aeff2c" },
        { color: "#a9ff1d" },
      ],
    },
   
  ];
  return (
    <div className="bg-[#EDF1F3] py-5 text-sm">
      <div className="bg-white p-10 flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">
        {/* <h2>Default Color</h2>
        <div className="flex gap-4 flex-wrap">
          {colors.map((color, index) => (
            <div
              key={index}
              className="text-white rounded-2xl py-5 px-10"
            ></div>
          ))}
        </div> */}
        <h1 className="font-semibold">Colors</h1>
        <div className="grid grid-cols-3 gap-5">
          {statecolorData.map((val, i) => (
            <div
              key={i}
              className=" flex flex-col gap-2 rounded-2xl py-5 px-10"
            >
              <h1 className="text-xl text-[#14256A] ">{val.title}</h1>
              <div>
                {val.colors.map((colordata, index) => (
                  <div key={i} className="grid text-center gap-4">
                    <h1 className="py-4 px-4 text-white" style={{
                      background:colordata.color 
                    }}>{colordata.color}</h1>
                  
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-white p-10 flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5"></div> */}
    </div>
  );
};

export default StateColor;
