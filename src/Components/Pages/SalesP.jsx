import React from "react";
import { PiDotsThreeBold, PiGreaterThan } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa";
import { Chart } from "react-google-charts";

import GoogleMapReact from "google-map-react";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Assamese", 13],
  ["Bengali", 83],
  ["Bodo", 1.4],
  ["Dogri", 2.3],
  ["Gujarati", 46],
  ["Hindi", 300],
  ["Kannada", 38],
  ["Kashmiri", 5.5],
  ["Konkani", 5],
  ["Maithili", 20],
  ["Malayalam", 33],
  ["Manipuri", 1.5],
  ["Marathi", 72],
  ["Nepali", 2.9],
  ["Oriya", 33],
  ["Punjabi", 29],
  ["Sanskrit", 0.01],
  ["Santhali", 6.5],
  ["Sindhi", 2.5],
  ["Tamil", 61],
  ["Telugu", 74],
  ["Urdu", 52],
];
const invoices = [
  {
    customer: "Customer",
    product: "Sunglass",
    invoice: "#DE2548",
    price: "$350",
    status: "Pending",
  },
  {
    customer: "Customer",
    product: "Sunglass",
    invoice: "#DE2548",
    price: "$350",
    status: "Paid",
  },
  {
    customer: "Customer",
    product: "Sunglass",
    invoice: "#DE2548",
    price: "$350",
    status: "Shipped",
  },
  {
    customer: "Customer",
    product: "Sunglass",
    invoice: "#DE2548",
    price: "$350",
    status: "Delivered",
  },
];

const statusColors = {
  Pending: "text-orange-500 bg-orange-100",
  Paid: "text-purple-500 bg-purple-100",
  Shipped: "text-blue-500 bg-blue-100",
  Delivered: "text-green-500 bg-green-100",
};

export const options = {
  title: "Indian Language Use",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

const SalesP = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const Datas = [
    [
      { type: "number", label: "x" },
      { type: "number", label: "values" },
      { id: "i0", type: "number", role: "interval" },
      { id: "i1", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
      { id: "i2", type: "number", role: "interval" },
    ],
    [1, 100, 90, 110, 85, 96, 104, 120],
    [2, 120, 95, 130, 90, 113, 124, 140],
    [3, 130, 105, 140, 100, 117, 133, 139],
    [4, 90, 85, 95, 85, 88, 92, 95],
    [5, 70, 74, 63, 67, 69, 70, 72],
    [6, 30, 39, 22, 21, 28, 34, 40],
    [7, 80, 77, 83, 70, 77, 85, 90],
    [8, 100, 90, 110, 85, 95, 102, 110],
  ];

  const options = {
    title: "Bar/area interval chart",
    curveType: "function",
    intervals: { color: "series-color" },
    interval: {
      i0: {
        color: "#4374E0",
        style: "bars",
        barWidth: 0,
        lineWidth: 4,
        pointSize: 10,
        fillOpacity: 1,
      },
      i1: {
        color: "#E49307",
        style: "bars",
        barWidth: 0,
        lineWidth: 4,
        pointSize: 10,
        fillOpacity: 1,
      },
      i2: { style: "area", curveType: "function", fillOpacity: 0.3 },
    },
    legend: "none",
  };

  const data = [
    ["Year", "Sales", "Expenses"],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
    ["2018", 1170, 460],
    ["2019", 660, 1120],
    ["2020", 1030, 540],
  ];

  const option = {
    chart: {
      subtitle: "Sales and Expenses over the Years",
    },
    bars: "vertical",
    colors: ["#1b9e77", "#d95f02", "#7570b3"],
    bar: { groupWidth: "75%" },
    legend: { position: "bottom" },
  };

  const transactions = [
    { name: "Electricity Bill", amount: -1254, time: "10 Aug 03:00PM" },
    { name: "Showroom Rent", amount: 1254, time: "10 Aug 03:00PM" },
    { name: "Iron Costing", amount: 1254, time: "10 Aug 03:00PM" },
    { name: "Packaging Cost", amount: 1254, time: "10 Aug 03:00PM" },
  ];

  const updates = [
    {
      title: "36% off For pixel lights Couslations Types.",
      description: "Sorem Kpsum is simply of the printing..",
    },
    {
      title: "We are produce new product this",
      description: "Gorem Rpsum is simply text of the printing...",
    },
    {
      title: "50% off For COVID Couslations Types.",
      description: "EoremHpsum is simply dummy...",
    },
  ];
  const products = [
    {
      name: "Product 1",
      price: "$564",
      discount: "#DE2548",
      sold: "60",
      source: "Google",
    },
    {
      name: "Product 1",
      price: "$564",
      discount: "#DE2548",
      sold: "60",
      source: "Direct",
    },
    {
      name: "Product 1",
      price: "$564",
      discount: "#DE2548",
      sold: "60",
      source: "Email",
    },
    {
      name: "Product 1",
      price: "$564",
      discount: "#DE2548",
      sold: "60",
      source: "Referral",
    },
  ];

  const sourceColors = {
    Google: "text-red-500",
    Direct: "text-green-500",
    Email: "text-blue-500",
    Referral: "text-purple-500",
  };

  return (
    <div className=" flex flex-col gap-5  bg-[#F3F4F3] ">
      <div className="bg-[#64C5B1] py-5  ">
        <div className="flex justify-between items-start group-[]:  w-11/12 mx-auto ">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl text-white font-semibold">Dashboard</h1>
            <h3 className="text-white text-sm flex items-center gap-2">
              Salessa <PiGreaterThan className="text-sm" /> Dashboard{" "}
              <PiGreaterThan className="text-sm" /> Sales
            </h3>
          </div>
          <button className="px-7 py-3 text-sm rounded shadow-2xl mt-5  text-black bg-white group-hover::bg-blue-500">
            Create Report
          </button>
        </div>
      </div>
      <div className=" rounded-lg  flex gap-4 px-5">
        {/* Revenue Section */}
        <div className="w-8/12 bg-white rounded-lg shadow-md">
          <div className="flex justify-between pt-5 px-5">
            <h2 className=" font-semibold ">Revenue</h2>
            <div className="flex justify-between gap-5">
              <button className="text-sm bg-[#F1F5FA] py-2 px-4 rounded">
                This Week
              </button>
              <button className="text-sm ">Last Week</button>
              <button className="text-sm text-blue-500">Last Month</button>
            </div>
          </div>
          <div className="  rounded-md flex items-center justify-center">
            <Chart
              chartType="Bar"
              data={data}
              options={option}
              className="w-[500px] h-[400px] "
            />
          </div>
        </div>

        {/* Total Sales Unit Section */}
        <div className="w-4/12 h-[460px] p-4 bg-white rounded-lg shadow-md flex flex-col gap-10">
          <h2 className="text-sm font-semibold ">Total Sales Unit</h2>
          <div className="h-2/3 bg-gray-100 rounded-md flex items-center justify-center">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="w-8/12  bg-white rounded-md shadow-md px-10 py-10 flex justify-between ml-5 ">
          <div>
            <h1 className="text-xl font-semibold">
              Download your earnings report
            </h1>
            <p className="text-gray-400 text-sm">
              There are many variations of passages
            </p>
          </div>
          <div>
            <button className="px-5 py-2 rounded shadow-2xl mt-5 text-white bg-[#567AED] ">
              Create Report
            </button>
          </div>
        </div>
        <div className="w-4/12 flex gap-2 px-7 py-5 rounded shadow-md  bg-[#323246] mr-4">
          <div>
            <h1 className="text-[#B9E6D5] text-sm">This Month Revenue</h1>
            <h1 className="text-white text-2xl">$57k</h1>
            <div className="flex text-sm gap-5">
              <div className="flex text-[#64C199] items-center gap-1 text-sm">
                <FaArrowUp className="" />
                <h1 className="">14.5%</h1>
              </div>
              <div className="text-[#B9E6D5] grid gap-4 text-sm">
                <h1>Up From </h1>
                <h1>Last Month</h1>
              </div>
            </div>
          </div>
          <div className="opacity-50">
            <h1 className="text-[#B9E6D5] text-sm">This Month Revenue</h1>
            <h1 className="text-white text-2xl">$17k</h1>
            <div className="flex text-sm gap-5 ">
              <div className="flex text-[#64C199] items-center gap-1 text-sm">
                <FaArrowUp className="" />
                <h1 className="">14.5%</h1>
              </div>
              <div className="text-[#B9E6D5] grid gap-4 text-sm">
                <h1>Up From </h1>
                <h1>Last Month</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white border flex flex-col gap-5 border-gray-200 rounded-md  px-8 py-5 mx-10">
          <div className="flex items-center  justify-between">
            <h1 className="text-sm font-semibold">Daily sales</h1>
            <PiDotsThreeBold className="text-xl" />
          </div>
          <div>
            <Chart
              chartType="LineChart"
              width="225px"
              height="180px"
              data={Datas}
              options={options}
            />
          </div>
        </div>

        <div className="bg-white border flex flex-col gap-5 border-gray-200 rounded-md  px-8 py-5 mx-10">
          <div className="flex items-center  justify-between">
            <h1 className="text-sm font-semibold">Summary</h1>
            <PiDotsThreeBold className="text-xl" />
          </div>
          <div>
            <Chart
              chartType="LineChart"
              width="225px"
              height="180px"
              data={Datas}
              options={options}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mx-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-sm font-semibold mb-4">Transaction</h2>
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center text-blue-500">
                  💸
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.time}</p>
                </div>
              </div>
              <p
                className={`font-semibold ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.amount < 0 ? "-" : "+"} $
                {Math.abs(transaction.amount)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold">News & Update</h2>
            <button className="text-sm text-green-500 bg-green-100 py-1 px-3 rounded-full">
              Today
            </button>
          </div>
          {updates.map((update, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="font-medium text-gray-800">{update.title}</h3>
              <p className="text-sm text-gray-500">{update.description}</p>
            </div>
          ))}
          <button className="text-green-500 flex text- text-sm">
            Load more &darr;
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className=" font-semibold mb-4 text-sm">Account Info</h2>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-sm">Monthly Plan</span>
              <span className="text-gray-600">$25</span>
            </div>
            <div className="flex justify-between  mb-2">
              <span className="font-semibold text-sm">Taxes</span>
              <span className="text-gray-600">$14</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span className="font-semibold text-sm">Extera</span>
              <span className="text-gray-600">$25</span>
            </div>
            <p className="text-sm font-semibold text-gray-500 mt-1">
              Netflix and other bills in this month.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h1 className="font-semibold text-sm text-gray-600">
              Total balance
            </h1>
            <h3 className="text-5xl font-semibold text-green-500">$3650</h3>
            <p className="text-sm text-gray-500">+1235</p>
            <div className="grid justify-center gap-2 mt-4">
              <button className="bg-red-100 text-red-500 text-sm px-3 py-1 rounded">
                Today
              </button>
              <button className="bg-blue-100 text-blue-500 text-sm px-3 py-1 rounded">
                This week
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mx-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Invoices</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="py-2">Customer</th>
                <th>Product</th>
                <th>Invoice</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={index} className="text-sm border-b last:border-none">
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                    <span className="text-blue-500">{invoice.customer}</span>
                  </td>
                  <td className="text-orange-500">{invoice.product}</td>
                  <td className="text-green-500">{invoice.invoice}</td>
                  <td>{invoice.price}</td>
                  <td>
                    <span
                      className={`text-xs py-1 px-3 rounded-full ${
                        statusColors[invoice.status]
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Top Selling Product</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="py-2">Product</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Sold</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="text-sm border-b last:border-none">
                  <td className="py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                    <span>{product.name}</span>
                  </td>
                  <td>{product.price}</td>
                  <td className="text-green-500">{product.discount}</td>
                  <td>{product.sold}</td>
                  <td className={sourceColors[product.source]}>
                    {product.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-5">
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default SalesP;
