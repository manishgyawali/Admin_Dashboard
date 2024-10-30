import React from "react";
import { PiGreaterThan } from "react-icons/pi";

import Laptop from "../../../assets/Image/laptop.png";
import Glasses from "../../../assets/Image/glasses.png";
import Headphone from "../../../assets/Image/headphone.png";
import Mastercard from "../../../assets/Image/mastercard.png";
import Paypal from "../../../assets/Image/paypal.png";
const CheckoutP = () => {
  return (
    <div className=" bg-[#EDF1F3] ">
      <div className="bg-[#64C5B1] py-5">
        <div className="flex justify-between items-start w-11/12 mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-white font-semibold">Checkout</h1>
            <h3 className="text-white text-sm flex items-center gap-2">
              Salessa <PiGreaterThan className="text-sm" /> Dashboard{" "}
              <PiGreaterThan className="text-sm" /> Checkout
            </h3>
          </div>
          <button className="px-5 text-sm py-2 rounded shadow-2xl mt-5 text-black bg-white hover:bg-blue-500">
            Create Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 m-5 rounded-md">
        <div className="bg-white shadow-lg rounded-md w-80 p-5">
          <h2 className="font-semibold text-[#2E2E5F] mb-4 text-2xl  pl-4 pb-5">
            Order Summary
          </h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b ">
                <th className="pb-2 pl-10 font-medium">Product</th>
                <th className="pb-2  font-medium">Quantity</th>
                <th className="pb-2  font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b py-4">
                <td className="py-3 flex flex-col items-center gap-2">
                  <img src={Laptop} alt="Reebok Bag" className="w-12 h-12" />
                  <p className="text-sm font-medium text-black text-center">
                    Reebok Shoes
                  </p>
                </td>
                <td className="text-center py-3">2</td>
                <td className="text-center py-3">$198</td>
              </tr>
              <tr className="border-b py-4">
                <td className="py-3 flex flex-col items-center gap-2">
                  <img src={Glasses} alt="White Camera" className="w-12 h-12" />
                  <p className="text-sm font-medium text-black text-center">
                    White Modern Camera
                  </p>
                </td>
                <td className="text-center py-3">2</td>
                <td className="text-center py-3">$150</td>
              </tr>
              <tr className="border-b py-4">
                <td className="py-3 flex flex-col items-center gap-2">
                  <img src={Headphone} alt="White Camera" className=" h-12" />
                  <p className="text-sm font-medium text-black text-center">
                    White Modern Camera
                  </p>
                </td>
                <td className="text-center py-3">2</td>
                <td className="text-center py-3">$150</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-lg rounded-md w-80 p-5">
          <h2 className="font-semibold text-[#2E2E5F] mb-4 text-2xl   pl-4 pb-5">
            Delivery Address
          </h2>

          <div className="flex flex-col gap-7">
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                First Name
              </label>
              <input
                type="text"
                className="border border-gray-500  rounded-md "
              />
            </div>
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                Last Name
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                Delivery Address
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>{" "}
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                City
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>{" "}
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                State
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>{" "}
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                Country
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>{" "}
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                Zip Code
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>{" "}
            <div className="flex gap-5 ">
              <label htmlFor="" className="w-12">
                Email Address
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>
            <div className="flex gap-5">
              <label htmlFor="" className="w-12">
                Mobile No
              </label>
              <input
                type="text"
                className="border border-gray-500 py-1  rounded-md "
              />
            </div>
            <div className="flex gap-7">
              <input type="checkbox" name="" id="" />
              <h1>Confirm Shipping Address</h1>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-md w-80 p-5">
          <h2 className="font-semibold  text-[#2E2E5F]  mb-4 text-2xl  pl-4 pb-5">
            Billing Details
          </h2>

          <div>
            <div className="flex gap-5 items-center justify-evenly cursor-pointer border p-5">
              <h1>Credit Card</h1>
              <img src={Mastercard} alt="" className="h-10" />
            </div>
            <div className="grid gap-5  cursor-pointer  border p-5">
              <h1>Card No :</h1>
              <input type="text" placeholder="1234-5678-9123-4567" className="border-gray-400 border p-3 rounded-md" />
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h1>Expiry Month</h1>
                  <input type="month" />
                </div>
                <div>
                  <h1>Expiry Month</h1>
                  <input type="year" />
                </div>
                <div>
                  <h1>Expiry Month</h1>
                  <input type="month" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutP;
