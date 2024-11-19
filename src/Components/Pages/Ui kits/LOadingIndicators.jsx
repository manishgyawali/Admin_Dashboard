import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LOadingIndicators = () => {
  const loadingindicatordData = [
    {
      rotatingline: (
        <RotatingLines
          visible={true}
          height="96"
          width="60"
          color="#0000FF"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ),
    },
    {
      rotatingline: (
        <RotatingLines
          visible={true}
          height="96"
          width="60"
          color="red"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ),
    },
    {
      rotatingline: (
        <RotatingLines
          visible={true}
          height="96"
          width="60"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ),
    },
    {
      rotatingline: (
        <RotatingLines
          visible={true}
          height="96"
          width="60"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ),
    },
    {
      rotatingline: (
        <RotatingLines
          visible={true}
          height="96"
          width="60"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ),
    },
    {
      rotatingline: (
        <RotatingLines
          visible={true}
          height="96"
          width="60"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ),
    },
  ];
  return (
    <div className="bg-[#EDF1F3]  py-5">
      <div className="bg-white  flex  flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-sm font-semibold">Spinner</h1>
          <div className="flex gap-10 pb-10">
            {loadingindicatordData.map((val, i) => (
              <div key={i}>{val.rotatingline}</div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-sm font-semibold">Spinner</h1>
          <div className="flex gap-10 pb-10">
            {loadingindicatordData.map((val, i) => (
              <div key={i}>{val.rotatingline}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LOadingIndicators;
