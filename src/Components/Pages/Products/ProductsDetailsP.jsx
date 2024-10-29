import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Laptop from "../../../assets/Image/laptop.png";
import Glasses from "../../../assets/Image/glasses.png";
import Headphone from "../../../assets/Image/headphone.png";
import { TbCurrencyDollar } from "react-icons/tb";
const ProductsDetailsP = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
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
    },]
  return (
    <div className=" bg-[#EDF1F3]">
      <div className="bg-[#64C5B1] py-5  ">
        <div className="flex justify-between items-start  w-11/12 mx-auto ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl text-white font-semibold">Products</h1>
            <h3 className="text-white text-sm flex items-center gap-2">
              Salessa <PiGreaterThan className="text-sm" /> Dashboard{" "}
              <PiGreaterThan className="text-sm" /> Products
            </h3>
          </div>
          <button className="px-5 text-sm py-2 rounded shadow-2xl mt-5 text-black bg-white hover:bg-blue-500">
            Create Report
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-1 items-center bg-white mx-7  rounded-md  py-5">
          <div>
            <img src={Headphone} alt="" className=" object-cover h-[350px]" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">Unique Headphone</h1>
            <h1 className=" text-gray-500 text-sm">
              Morden and good look model 2020
            </h1>
            <h1>4.5 (9830 reviews)</h1>
            <h1 className="font-semibold text-lg">
              $89.00 <span className="text-red-600">50% Off</span>
            </h1>
            <div className="text-gray-400">
              <h1>Features :</h1>
              <p className="flex items-center gap-3">
                <TiTick className="text-[#64C5B1]" /> It is a long established
                fact that a reader will be distracted.
              </p>
              <p className="flex items-center gap-3">
                {" "}
                <TiTick className="text-[#64C5B1]" /> Contrary to popular
                belief, Lorem Ipsum is not text.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {/* Color Options */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium">Color:</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 cursor-pointer ${
                    selectedColor === "blue"
                      ? "border-blue-500"
                      : "border-gray-400"
                  }`}
                  onClick={() => handleColorChange("blue")}
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 cursor-pointer ${
                    selectedColor === "gray"
                      ? "border-blue-500"
                      : "border-gray-400"
                  }`}
                  onClick={() => handleColorChange("gray")}
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-400 rounded-md w-16 h-9 text-center"
                  min="1"
                />
                <button className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-7 bg-white p-5 flex flex-col gap-5 rounded-md">
          <h1>Related Products</h1>
          <p className="text-gray-400 text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage.
          </p>
        </div>
        <div className="mx-7 bg-white p-5 flex flex-col gap-5 rounded-md mb-10">
        <div className="grid  grid-cols-3  gap-5 w-11/12 mx-auto ">
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
    </div>
  );
};

export default ProductsDetailsP;
