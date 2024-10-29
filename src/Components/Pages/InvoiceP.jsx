import React from "react";
import { PiGreaterThan } from "react-icons/pi";

const InvoiceP = () => {
  const products = [
    {
      id: 1,
      item: "Sport Shoe",
      description: "export shoe",
      unitCost: 99.0,
      qty: 1,
      total: 99.0,
    },
    {
      id: 2,
      item: "Sport Shoe",
      description: "export shoe",
      unitCost: 99.0,
      qty: 1,
      total: 99.0,
    },
    {
      id: 3,
      item: "Sport Shoe",
      description: "export shoe",
      unitCost: 99.0,
      qty: 1,
      total: 99.0,
    },
    {
      id: 4,
      item: "Sport Shoe",
      description: "export shoe",
      unitCost: 99.0,
      qty: 1,
      total: 99.0,
    },
    {
      id: 5,
      item: "Sport Shoe",
      description: "export shoe",
      unitCost: 99.0,
      qty: 1,
      total: 99.0,
    },
    {
      id: 6,
      item: "Sport Shoe",
      description: "export shoe",
      unitCost: 99.0,
      qty: 1,
      total: 99.0,
    },
  ];
  return (
    <div className="   bg-[#F3F4F3] ">
      <div className="bg-[#64C5B1] py-5  ">
        <div className="flex justify-between items-start  w-11/12 mx-auto ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl text-white font-semibold">Invoice</h1>
            <h3 className="text-white text-sm flex items-center gap-2">
              Salessa <PiGreaterThan className="text-sm" /> Dashboard{" "}
              <PiGreaterThan className="text-sm" /> Invoice
            </h3>
          </div>
          <button className="px-5 py-2 rounded shadow-2xl mt-5 text-black bg-white hover:bg-blue-500">
            Print
          </button>
        </div>
      </div>

      <div className="bg-[#EFF2F3]">
        <div className="  border px-5  rounded-lg border-gray-300">
          <div className=" border p-5  border-gray-300  bg-[#F7F7F7] flex justify-between">
            <h1>
              Invoice <span className="font-semibold">15/08/2020</span>
            </h1>
            <h1 className="font-semibold">
              Status: <span>Pending</span>
            </h1>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-2   px-5   py-4 gap-10 ">
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold">From:</h1>
                <div className="flex flex-col ">
                  <h1 className="font-semibold">Person 1</h1>
                  <h1>England</h1>
                  <h1>71-101 Szczecin, England</h1>
                  <h1>Email: demo@gmail.com</h1>
                  <h1>Phone: +0000</h1>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold">To:</h1>
                <div className="flex flex-col ">
                  <h1 className="font-semibold">Person 2</h1>
                  <h1>England</h1>
                  <h1>71-101 Szczecin, England</h1>
                  <h1>Email: demo@gmail.com</h1>
                  <h1>Phone: +0000</h1>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto text-sm px-5 mt-3">
              <table className="min-w-full  ">
                <thead>
                  <tr className="bg-[#F8FAFF] text-left text-[#64C5B8]">
                    <th className="py-3 px-4 border-b">#</th>
                    <th className="py-2 px-4 border-b">Item</th>
                    <th className="py-2 px-4 border-b">Description</th>
                    <th className="py-2 px-4 border-b">Unit Cost</th>
                    <th className="py-2 px-4 border-b">Qty</th>
                    <th className="py-2 px-4 border-b">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"}
                    >
                      <td className="py-3 px-4 border-b">{product.id}</td>
                      <td className="py-2 px-4 border-b">{product.item}</td>
                      <td className="py-2 px-4 border-b">
                        {product.description}
                      </td>
                      <td className="py-2 px-4 border-b">
                        ${product.unitCost.toFixed(2)}
                      </td>
                      <td className="py-2 px-4 border-b">{product.qty}</td>
                      <td className="py-2 px-4 border-b">
                        ${product.total.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end gap-10 items-end px-10 py-8 mb-5">
              <div className="font-semibold text-sm flex flex-col gap-5">
                <h1>Subtotal</h1>
                <h1>Discount (20%)</h1>
                <h1>VAT (10%)</h1>
                <h1>Total</h1>
              </div>
              <div className=" flex text-sm flex-col gap-5">
                <h1>$8.497,00</h1>
                <h1>$1,699,40</h1>
                <h1>$679,76</h1>
                <h1 className="font-semibold">$7.477,36</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceP;
