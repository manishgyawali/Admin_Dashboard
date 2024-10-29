import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Laptop from "../../../assets/Image/laptop.png";
import Glasses from "../../../assets/Image/glasses.png";
import Headphone from "../../../assets/Image/headphone.png";
import { TbCurrencyDollar } from "react-icons/tb";

const ProductsP = () => {
  const productData = [
    {
      image: Laptop,
      style: "Life Style",
      name: "Laptop",
      price: "49.00",
      rating: "5 star",
      btn: "Add To Cart",
    },
    {
      image: Glasses,
      style: "Life Style",
      name: "Unique Glasses",
      price: "49.00",
      rating: "5 star",
      btn: "Add To Cart",
    },
    {
      image: Headphone,
      style: "Life Style",
      name: "Unique Headphone",
      price: "49.00",
      rating: "5 star",
      btn: "Add To Cart",
    },
    {
        image: Glasses,
        style: "Life Style",
        name: "Unique Glasses",
        price: "49.00",
        rating: "5 star",
        btn: "Add To Cart",
      },
      {
        image: Headphone,
        style: "Life Style",
        name: "Unique Headphone",
        price: "49.00",
        rating: "5 star",
        btn: "Add To Cart",
      },
      {
        image: Laptop,
        style: "Life Style",
        name: "Laptop",
        price: "49.00",
        rating: "5 star",
        btn: "Add To Cart",
      },
    
  ];
  return (
    <div className=" flex flex-col gap-10  bg-[#F3F4F3] ">
      <div className="bg-[#64C5B1] py-5  ">
        <div className="flex justify-between items-start  w-11/12 mx-auto ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl text-white font-semibold">Products</h1>
            <h3 className="text-white text-sm flex items-center gap-2">
              Salessa <PiGreaterThan className="text-sm" /> Dashboard{" "}
              <PiGreaterThan className="text-sm" /> Products
            </h3>
          </div>
          <button className="px-5 py-2 rounded shadow-2xl mt-5 text-black bg-white hover:bg-blue-500">
            Create Report
          </button>
        </div>
      </div>
      <div>
        <div className="grid  grid-cols-4 gap-5 w-11/12 mx-auto mb-10">
          {productData.map((val, i) => (
            <div key={i} className="bg-white rounded-md items-center">
              <img src={val.image} alt="" className="object-cover  w-full h-[200px]" />
              <div className="flex group flex-col gap-1  p-5 ">
                <h1 className="text-xs font-semibold w-6/12 rounded-md bg-[#E6F8FF] text-blue-400 px-4 py-2 fit">
                  {val.style}
                </h1>
                <h1 className="text-[#64C5B1]">{val.name}</h1>
                <h1 className="font-semibold text-xl flex items-center"><TbCurrencyDollar className=""/>{val.price}</h1>
                <h1>{val.rating}</h1>
                <button className="border border-[#64C5B1] mt-4 text-[#64C5B1] px-7 py-2 rounded-md ">
                  {val.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsP;
