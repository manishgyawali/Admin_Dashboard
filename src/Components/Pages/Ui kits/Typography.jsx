import React from "react";

const Typography = () => {
  return (
    <div className="bg-[#EDF1F3] py-5">
      <div className="bg-white p-10 flex flex-col gap-5 py-5 px-10 rounded mx-10 mt-5">
        <div className="text-sm">
          <h1 className="font-semibold" >Headings</h1>
          <p className="text-gray-400">All HTML headings, are available.</p>
        </div>
        <div className="flex flex-wrap space-x-8 p-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-blue-900">
              This is a Heading 1
            </h1>
            <h2 className="text-3xl font-semibold text-blue-800">
              This is a Heading 2
            </h2>
            <h3 className="text-2xl font-semibold text-blue-700">
              This is a Heading 3
            </h3>
            <h4 className="text-xl font-medium text-blue-600">
              This is a Heading 4
            </h4>
            <h5 className="text-lg font-medium text-blue-500">
              This is a Heading 5
            </h5>
            <h6 className="text-base font-medium text-blue-400">
              This is a Heading 6
            </h6>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-blue-900">
              Heading 1{" "}
              <span className="text-lg text-blue-500">Sub Heading</span>
            </h1>
            <h2 className="text-3xl font-semibold text-purple-700">
              Heading 2{" "}
              <span className="text-lg text-blue-500">Sub Heading</span>
            </h2>
            <h3 className="text-2xl font-semibold text-pink-500">
              Heading 3{" "}
              <span className="text-lg text-blue-500">Sub Heading</span>
            </h3>
            <h4 className="text-xl font-medium text-teal-400">
              Heading 4{" "}
              <span className="text-lg text-blue-500">Sub Heading</span>
            </h4>
            <h5 className="text-lg font-medium text-cyan-500">
              Heading 5{" "}
              <span className="text-base text-blue-500">Sub Heading</span>
            </h5>
            <h6 className="text-base font-medium text-indigo-400">
              Heading 6{" "}
              <span className="text-sm text-blue-500">Sub Heading</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
