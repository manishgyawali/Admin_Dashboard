import React, { useState } from "react";
// import {
//   FaHome,
//   FaAppStore,
//   FaClipboardList,
//   FaWpforms,
//   FaTrello,
//   FaFileInvoiceDollar,
//   FaCalendarAlt,
//   FaBoxOpen,
//   FaIcons,
//   FaFilm,
//   FaCog,
//   FaTable,
//   FaThList,
//   FaMapMarkedAlt,
//   FaFileAlt,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isUiKitsOpen, setIsUiKitsOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isChartsopen, setIsChartsOpen] = useState(false);
  const [Show, setShow] = useState(null);
  const sidebarData = [
    {
      title: "Dashboard",
      subdata: [
        {
          title: "Sales",
          path:"/",
        },
        {
          title: "Default",
          path:"/defaultp",
        },
        {
          title: "Dark Menu",
          path:"/darkmenup",
        },
      ],
    },
    {
      title: "Apps",
      subdata: [
        {
          title: "Editor",
          path:"/editorp",

        },
        {
          title: "Mail Box",
          path:"/mailboxp",

        },
        {
          title: "Chat",
          path:"/chatp",

        },
        {
          title: "FAQ",
          path:"/faqp",

        },
      ],
    },
    {
      title: "UI Kits",
      subdata: [
        {
          title: "Colors",
          path:"/colors",

        },
        {
          title: "Alerts",
          path:"/alerts",
        },
        {
          title: "Buttons",
          path:"/buttons",

        },
        {
          title: "Modal",
          path:"/modal",

        },
        {
          title: "Dropdowns",
          path:"/dropdowns",

        },
        {
          title: "Badges",
          path:"/badges",

        },
        {
          title: "Loading Indicators",
          path:"/loadingindicators",

        },
        {
          title: "State Color",
          path:"/statecolor",

        },
        {
          title: "Typography",
          path:"/typography",

        },
        {
          title: "Date Picker",
          path:"/datepicker",

        },
      ],
    },
    {
      title: "Forms",
      subdata: [
        {
          title: "Basic Elements",
        },
        {
          title: "Groups",
        },
        {
          title: "Max Length",
        },
        {
          title: "Layouts",
        },
      ],
    },
    {
      title: "Board",
    },
    {
      title: "Invoice",
      path:"/invoicep",

    },
    {
      title: "Calander",
    },
    {
      title: "Products",
      subdata: [
        {
          title: "Products",
          path:"/productsp",

        },
        {
          title: "Product Details",
          path:"/productsdetailsp",

        },
        {
          title: "Cart",
          path:"/cartp",

        },
        {
          title: "Checkout",
          path:"/checkoutp",

        },
      ],
    },
    {
      title: "Animation",
      subdata: [
        {
          title: "Animate",
        },
        {
          title: "Scroll revel",
        },
        {
          title: "Tilt Animation",
        },
      ],
    },
    {
      title: "Components",
      subdata: [
        {
          title: "Accordians",
        },
        {
          title: "Scrollable",
        },
        {
          title: "Notifications",
        },
        {
          title: "Crousel",
        },
        {
          title: "Pagination",
        },
      ],
    },
    {
      title: "Table",
      subdata: [
        {
          title: "Data Tables",
        },
        {
          title: "Bootstrap",
        },
      ],
    },
    {
      title: "Cards",
      subdata: [
        {
          title: "Basic Card",
        },
        {
          title: "Theme Card",
        },
        {
          title: "Draggable Card",
        },
      ],
    },
    {
      title: "Widgets",
      subdata: [
        {
          title: "Chart Boxes 1",
        },
        {
          title: "Profile Box",
        },
      ],
    },
    {
      title: "Maps",
      subdata: [
        {
          title: "Maps Js",
        },
        {
          title: "Vector Maps",
        },
      ],
    },
    {
      title: "Pages",
      subdata: [
        {
          title: "Login",
        },
        {
          title: "Register",
        },
        {
          title: "Error 404",
        },
        {
          title: "Error 500",
        },
        {
          title: "FOrgot Password",
        },
        {
          title: "Gallery",
        },
      ],
    },
  ];

  return (
    <div className="">
      <aside className="flex  flex-col gap-10 py-10 px-10 ">
        <div>
          <h1 className="font-semibold text-2xl">Salessa</h1>
        </div>

        {/* <div className="flex flex-col gap-12 text-lg cursor-pointer">
          
          

         

          <div className="flex flex-col gap-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsFormsOpen(!isFormsOpen)}
            >
              <div className="flex gap-5 items-center">
                <FaWpforms className="text-[#64C5B1] text-xl" />
                <h1> Forms</h1>
              </div>
              {isFormsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isFormsOpen && (
              <div className="ml-8 flex flex-col gap-3">
                <h1>Form 1</h1>
                <h1>Form 2</h1>
              </div>
            )}
          </div>

          <div className="flex gap-5 items-center">
            <FaTrello className="text-[#64C5B1] text-xl" />
            <h1> Board</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaFileInvoiceDollar className="text-[#64C5B1] text-xl" />
            <Link to="/invoicep">Invoice</Link>
            </div>
          <div className="flex gap-5 items-center">
            <FaCalendarAlt className="text-[#64C5B1] text-xl" />
            <h1> Calander</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <div className="flex gap-5 items-center">
                <FaBoxOpen className="text-[#64C5B1] text-xl" />
                <h1> Products</h1>
              </div>
              {isProductsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isProductsOpen && (
              <div className="ml-8 flex flex-col gap-3">
                <Link to="/productsp">Products</Link>
                <Link to="/productsdetailsp">Product Details</Link>
                <Link to="/cartp">Cart</Link>
                <Link to="/checkoutp">Checkout</Link>
              </div>
            )}
          </div>
          <div className="flex gap-5 items-center">
            <FaIcons className="text-[#64C5B1] text-xl" />
            <h1> Icons</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaFilm className="text-[#64C5B1] text-xl" />
            <h1> Animations</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaCog className="text-[#64C5B1] text-xl" />
            <h1> Components</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsChartsOpen(!isChartsopen)}
            >
              <div className="flex gap-5 items-center">
                <FaBoxOpen className="text-[#64C5B1] text-xl" />
                <h1> Charts</h1>
              </div>
              {isChartsopen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isChartsopen && (
              <div className="ml-8 flex flex-col gap-3">
                <Link to="/chartjs">ChartJs</Link>
                <Link to="/apexcharts">Apex Charts</Link>
                <Link to="/chartsparkline">Chart sparkline</Link>
                <Link to="/amcharts">am-charts</Link>
                <Link to="/nvd3charts">nvd3 charts</Link>

              </div>
            )}
          </div>
          <div className="flex gap-5 items-center">
            <FaThList className="text-[#64C5B1] text-xl" />
            <h1> Cards</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaThList className="text-[#64C5B1] text-xl" />
            <h1> Widgets</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaMapMarkedAlt className="text-[#64C5B1] text-xl" />
            <h1> Maps</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaFileAlt className="text-[#64C5B1] text-xl" />
            <h1> Pages</h1>
          </div>
        </div> */}
        <div>
          <div className="grid gap-4">
            {sidebarData.map((val, i) => (
              <div
                key={i}
               
              >
              {
                val.subdata?  <div  onClick={() => {
                  if (Show === i) {
                    setShow(null);
                  } else {
                    setShow(i);
                  }
                }} className="flex gap-4 justify-between  items-center">
                <h1>{val.title}</h1>
                {Show == i ? (
                    <MdKeyboardArrowDown className="text-2xl" />
                  ) : (
                    <MdKeyboardArrowRight className="text-2xl" />
                  )}
              </div>:
               <Link to={val.path} className="flex gap-4 justify-between  items-center">
               <h1>{val.title}</h1>
             </Link>

              }
                <div
                  className={`${
                    Show == i ? "pt-4 grid gap-4 opacity-100 text-gray-500  " : "pt-0 opacity-0"
                  } transition-all ease-in-out duration-150 delay-75 w-11/12 mx-auto `}
                >
                  {Show == i &&
                    val.subdata &&
                    val.subdata.map((item, ind) => {
                      return (
                        <Link to={item.path}>
                          <div>{item.title}</div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
