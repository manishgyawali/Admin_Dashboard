import React from "react";

const colors = [
  { hex: "#3F6AD8" },
  { hex: "#2E9DE4" },
  { hex: "#80CF00" },
  { hex: "#06B5DD" },
  { hex: "#FFC717" },
  { hex: "#FD517D" },
  { hex: "#EEEEEE" },
  { hex: "#2C323F" }
];

const StateColor = () => {
  const statecolorData = [ 
    {
      title: "PRIMARY",
      color1: "#8a75dd",
      color2: "#8a75dd",
      color3: "#7f68da",
      color4: "#7a62d8",
      color5: "#755cd7",
      color6: "#7056d5",
      color7: "#6a50d4",
      color8: "#654ad2",
    },
    {
      title: "SECONDARY",
      color1: "#69b9ec",
      color2: "#64b6eb",
      color3: "#60b4ea",
      color4: "#7a62d8",
      color5: "#755cd7",
      color6: "#7056d5",
      color7: "#6a50d4",
      color8: "#654ad2",
    },
    {
      title: "SUCCESS",
      color1: "#8a75dd",
      color2: "#8a75dd",
      color3: "#7f68da",
      color4: "#7a62d8",
      color5: "#755cd7",
      color6: "#7056d5",
      color7: "#6a50d4",
      color8: "#654ad2",
    }
    // const colorPalettes = {
    //   primary: ["#8a75dd", "#8a75dd", "#7f68da", "#7a62d8", "#755cd7", "#7056d5", "#6a50d4", "#654ad2"],
    //   secondary: ["#69b9ec", "#64b6eb", "#60b4ea", "#5bb2ea", "#57b0e9", "#52aee9", "#4aece8", "#49aae8"],
    //   success: ["#d7ff97", "#d1ff88", "#ccff78", "#c6ff69", "#c0ff5a", "#b4ff3b", "#aeff2c", "#a9ff1d"],
    // };
  ]
  return (
    <div className="bg-[#EDF1F3] py-5 text-sm">
      <div className="bg-white p-10 flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">
        <h2>Default Color</h2>
        <div className="flex gap-4 flex-wrap">
          {colors.map((color, index) => (
            <div
              key={index}
              className="text-white rounded-2xl py-5 px-10"
              style={{ backgroundColor: color.hex }}
            >
              {color.hex}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-10 flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">


      </div>
    </div>
  );
};

export default StateColor;
