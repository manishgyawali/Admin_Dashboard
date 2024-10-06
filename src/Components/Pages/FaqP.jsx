import React from "react";

const FaqP = () => {
  const faqData = [
    {
      names: "Faq",
      eg: "Example 0",
      p: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      eg1: "Example 1",
      eg2: "Example 2",
      eg3: "Example 3",
      eg4: "Example 4",
      eg5: "Example 5",
    },
    {
      names: "Faq Square",
      eg: "Example 0",
      p: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      eg1: "Example 1",
      eg2: "Example 2",
      eg3: "Example 3",
      eg4: "Example 4",
      eg5: "Example 5",
    },
  ];
  return (
    <div className="bg-[#F3F4F3] pb-10 ">
      <div className="py-12 px-5">
        <h1 className="text-3xl ">FAQ</h1>
      </div>
      
      <div className="grid grid-cols-2 bg-white  gap-10 ml-5 px-10 py-10 rounded-md">
        {faqData.map((val, i) => (
          <div key={i} className="flex flex-col gap-7">
            <h1 className="font-semibold">{val.names}</h1>
            <h1 className="bg-[#4C6EF8] rounded-md text-white px-8 py-3">{val.eg}</h1>
            <p className="text-gray-500">{val.p}</p>
            
            <h1 className="bg-[#F5F6FF] text-black px-8 py-3 rounded-md">{val.eg1}</h1>
            <h1 className="bg-[#F5F6FF] text-black px-8 py-3 rounded-md">{val.eg2}</h1>
            <h1 className="bg-[#F5F6FF] text-black px-8 py-3 rounded-md">{val.eg3}</h1>
            <h1 className="bg-[#F5F6FF] text-black px-8 py-3 rounded-md">{val.eg4}</h1>
            <h1 className="bg-[#F5F6FF] text-black px-8 py-3 rounded-md">{val.eg5}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqP;
