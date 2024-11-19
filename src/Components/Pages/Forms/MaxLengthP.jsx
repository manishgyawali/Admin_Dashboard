import React from "react";

const MaxLengthP = () => {
  const maxData = [
    {
      title: "Default Usage",
      title2:
        "The badge will show up by default when the remaining chars are 25 or less:",
    },
    {
      title: "Threshold Value",
      title2:
        "Do you want the badge to show up when there are 20 chars or less? Use the threshold option:",
    },
    {
      title: "All the Options",
      title2:
        "This is a complete example where all the options configured for the bootstrap-maxlength counter are setted.",
    },
    {
      title: "Positions",
      title2:
        "All you need to do is specify the placement option, with one of those strings. If none is specified, the positioning will be defauted to 'bottom'.",
    },
  ];
  return (
    <div className="bg-[#EDF1F3] py-5 ">
      <div className="p-10 py-5 px-10 rounded mx-10 mt-5">
        {/* <div className="flex flex-col gap-5 bg-white">
          <h1>Default Usage</h1>
          <div className="flex flex-col gap-2">
            <p>
              The badge will show up by default when the remaining chars are 25
              or less:
            </p>
            <input
              type="text"
              placeholder="Enter text"
              className="px-3 rounded-md border border-gray-500"
            />
          </div>
        </div> */}
        <div className="grid bg-white grid-cols-2 gap-5 ">
          {maxData.map((val, i) => (
            <div key={i} className="flex flex-col gap-5">
              <h1>{val.title}</h1>
              <div className="flex flex-col gap-2">
                <p>{val.title2}</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="px-3 rounded-md border border-gray-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaxLengthP;
