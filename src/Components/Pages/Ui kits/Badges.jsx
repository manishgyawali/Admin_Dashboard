import React from "react";

const Badges = () => {
  return (
    <div className="bg-[#EDF1F3] py-5 text-sm">
      <div className="bg-white p-10 flex flex-col gap-3 py-5 px-10   rounded mx-10 mt-5 ">
        <h1>Badge 1</h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">
            Example heading{" "}
            <span className="bg-[#2E9DE4] text-white rounded-md px-4 ">
              New
            </span>
          </h1>
          <h1 className="text-2xl">
            Example heading{" "}
            <span className="bg-[#2E9DE4] text-white rounded-md px-4 ">
              New
            </span>
          </h1>
          <h1 className="text-xl">
            Example heading{" "}
            <span className="bg-[#2E9DE4] text-white rounded-md px-4 ">
              New
            </span>
          </h1>
          <h1 className="text-md">
            Example heading{" "}
            <span className="bg-[#2E9DE4] text-white rounded-md px-4 ">
              New
            </span>
          </h1>
          <h1 className="text-sm">
            Example heading{" "}
            <span className="bg-[#2E9DE4] text-white rounded-md px-4 ">
              New
            </span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-10 mt-4">
        <div className="flex flex-col gap-3 bg-white py-5 px-10 rounded-md">
          <h1>Badge 1</h1>
          <button className="bg-[#2D1967] px-3 py-2 text-white rounded-md">
            Notifications{" "}
            <span className="bg-gray-200 text-white rounded-md px-4 ">4</span>
          </button>
        </div>
        <div className="flex flex-col gap-3 bg-white py-5 px-10 rounded-md">
          <h1>Badge 1</h1>
          <button className="bg-[#2D1967] px-3 py-2 text-white rounded-md">
            Notifications{" "}
            <span className="bg-gray-200 text-white rounded-md px-4 ">4</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-10 mt-4">
        <div className="flex  flex-col gap-3 bg-white py-5 px-10 rounded-md ">
          <h1>Pill badges</h1>

          <div className="flex  flex-wrap gap-2 text-xs  ">
            <button className="text-white  bg-[#2D1967] px-3 py-1 rounded ">
              Primary
            </button>
            <button className="text-white  bg-[#5E656C] px-3 py-1 rounded ">
              Secondary
            </button>
            <button className="text-white  bg-[#198754] px-3 py-1 rounded ">
              Success
            </button>
            <button className="text-white  bg-[#DC3545] px-3 py-1 rounded ">
              Danger
            </button>
            <button className="text-white  bg-[#FFC107] px-3 py-1 rounded ">
              Warning
            </button>
            <button className="text-white  bg-[#0DCAF0] px-3 py-1 rounded ">
              Info
            </button>
            <button className="text-black  bg-white px-3 py-1 rounded ">
              Light
            </button>
            <button className="text-white  bg-black px-3 py-1 rounded ">
              Dark
            </button>
            <button className="text-blue-400   px-3 py-1 rounded ">Link</button>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-white py-5 px-10 rounded-md">
          <h1>Link</h1>

          <div className="flex flex-wrap gap-2 text-xs ">
            <button className="text-white  bg-[#2D1967] px-3 py-1 rounded-full ">
              Primary
            </button>
            <button className="text-white  bg-[#5E656C] px-3 py-1 rounded-full ">
              Secondary
            </button>
            <button className="text-white  bg-[#198754] px-3 py-1 rounded-full ">
              Success
            </button>
            <button className="text-white  bg-[#DC3545] px-3 py-1 rounded-full ">
              Danger
            </button>
            <button className="text-white  bg-[#FFC107] px-3 py-1 rounded-full ">
              Warning
            </button>
            <button className="text-white  bg-[#0DCAF0] px-3 py-1 rounded-full ">
              Info
            </button>
            <button className="text-black  bg-white px-3 py-1 rounded-full ">
              Light
            </button>
            <button className="text-white  bg-black px-3 py-1 rounded-full ">
              Dark
            </button>
            <button className="text-blue-400   px-3 py-1 rounded-full ">Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
