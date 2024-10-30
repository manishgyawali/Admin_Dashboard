import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import Laptop from "../../../assets/Image/laptop.png";
import Glasses from "../../../assets/Image/glasses.png";
import Headphone from "../../../assets/Image/headphone.png";

const CartP = () => {
  return (
    <div className=" bg-[#EDF1F3] ">
      <div className="bg-[#64C5B1] py-5">
        <div className="flex justify-between items-start w-11/12 mx-auto">
          <div className="flex flex-col gap-3">
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

      <div className="w-11/12 mx-auto mb-14 ">
        <table className="w-full text-left bg-white rounded-md">
          <thead>
            <tr className="bg-[#F3F9FB] text-[#64C5B1] text-sm font-semibold">
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Quantity</th>
              <th className="py-4 px-6">Total</th>
              <th className="py-4 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-4 px-6 flex items-center gap-3">
                <img src={Laptop} alt="Reebok Bag" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-black">Laptop</p>
                  <p className="text-sm text-gray-400">size-08 (Model 2019)</p>
                </div>
              </td>
              <td className="py-4 px-6 text-black">$99</td>
              <td className="py-4 px-6">
                <input
                  type="number"
                  defaultValue="2"
                  className="border p-1 w-12 text-center"
                />
              </td>
              <td className="py-4 px-6 text-black">$198</td>
              <td className="py-4 px-6 text-center">
                <AiOutlineClose className="text-gray-500 cursor-pointer" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-4 px-6 flex items-center gap-3">
                <img src={Glasses} alt="White Shoes" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-black">Glasses</p>
                  <p className="text-sm text-gray-400">size-06 (Model 2019)</p>
                </div>
              </td>
              <td className="py-4 px-6 text-black">$75</td>
              <td className="py-4 px-6">
                <input
                  type="number"
                  defaultValue="2"
                  className="border p-1 w-12 text-center"
                />
              </td>
              <td className="py-4 px-6 text-black">$150</td>
              <td className="py-4 px-6 text-center">
                <AiOutlineClose className="text-gray-500 cursor-pointer" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-4 px-3 flex items-center gap-3">
                <img src={Headphone} alt="Lava Watch" className="w-14 h-15" />
                <div>
                  <p className="font-semibold text-black">Lava Headphone</p>
                  <p className="text-sm text-gray-400">
                    Pure Leather 100% (Model 2019)
                  </p>
                </div>
              </td>
              <td className="py-4 px-6 text-black">$49</td>
              <td className="py-4 px-6">
                <input
                  type="number"
                  defaultValue="1"
                  className="border p-1 w-12 text-center"
                />
              </td>
              <td className="py-4 px-6 text-black">$49</td>
              <td className="py-4 px-6 text-center">
                <AiOutlineClose className="text-gray-500 cursor-pointer" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-4 px-6 flex items-center gap-3">
                <img
                  src={Glasses}
                  alt="Important Shoes"
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-semibold text-black">Important Glasses</p>
                  <p className="text-sm text-gray-400">size-07 (Model 2019)</p>
                </div>
              </td>
              <td className="py-4 px-6 text-black">$99</td>
              <td className="py-4 px-6">
                <input
                  type="number"
                  defaultValue="1"
                  className="border p-1 w-12 text-center"
                />
              </td>
              <td className="py-4 px-6 text-black">$99</td>
              <td className="py-4 px-6 text-center">
                <AiOutlineClose className="text-gray-500 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-white pt-10 px-10  grid justify-end gap-7 ">
          <h1 className="text-xl">Total Payment</h1>
          <div className="flex gap-5 justify-end">
            <div className="flex flex-col gap-10 text-sm text-gray-800">
              <h1>Subtotal</h1>
              <h1>Shipping</h1>
              <h1>Promo Code</h1>
              <h1>Total</h1>
            </div>
            <div className="flex flex-col gap-10  text-sm text-gray-800">
              <h1>$496.00</h1>

              <h1>Shipping Charge : $5.00</h1>

              <h1>-$10.00</h1>
              <h1 className="text-black font-semibold"> $491.00</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartP;
