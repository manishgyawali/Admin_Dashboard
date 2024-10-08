import React from "react";

const Modal = () => {
  const modalData = [
    {
      name: "Modal Components",
      para: "Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.",
      btn: "Launch demo modal",
    },
    {
      name: "Scrolling Modal Components",
      para: "Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.",
      btn: "Launch demo modal",
    },
    {
      name: "Modal Components",
      para: "Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.",
      btn: "Vertically centered",
    },
    {
      name: "Grid Modal Components",
      para: "Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.",
      btn: "grid modal",
    },
    {
      name: " Center Modal Components",
      para: "Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.",
      btn: "Large modal",
    },
    {
      name: "Small Modal Components",
      para: "Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.",
      btn: "Small modal",
    },
  ];
  return (
    <div className="bg-[#EBEFF3]  p-5 ">
      <div className="grid gap-10 bg-white ml-5  ">
        {modalData.map((val, i) => (
          <div key={i} className="flex flex-col gap-8 rounded-md px-10 py-5">
            <h1 className="font-semibold text-sm">{val.name}</h1>
            <p className="text-sm text-gray-400">{val.para}</p>
            <button className="py-2   bg-[#2D1967] w-3/12 text-white rounded-md">{val.btn}</button>         </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
