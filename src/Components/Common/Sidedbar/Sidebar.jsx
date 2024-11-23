import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineWidgets, MdProductionQuantityLimits } from "react-icons/md";
import logo from "../../../assets/Image/logo.png";
import {
  FaHome,
  FaAppStore,
  FaClipboardList,
  FaWpforms,
  FaTrello,
  FaFileInvoiceDollar,
  FaCalendarAlt,
  FaBoxOpen,
  FaIcons,
  FaFilm,
  FaCog,
  FaThList,
  FaMapMarkedAlt,
  FaFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCardOutline, IoHomeOutline } from "react-icons/io5";
import { LiaMedkitSolid, LiaPagerSolid } from "react-icons/lia";
import { CiCalendarDate, CiViewBoard, CiViewTable } from "react-icons/ci";
import { PiInvoiceLight } from "react-icons/pi";
import { LuComponent } from "react-icons/lu";
import { GrMap } from "react-icons/gr";

const Sidebar = () => {
  const [Show, setShow] = useState(null);

  const sidebarData = [
    {
      title: "Dashboard",
      icon: <IoHomeOutline  className="text-[#64C5B1] " />,
      subdata: [
        { title: "Sales", path: "/" },
        { title: "Default", path: "/defaultp" },
        { title: "Dark Menu", path: "/darkmenup" },
      ],
    },
    {
      title: "Apps",
      icon: <FaAppStore className="text-[#64C5B1]" />,
      subdata: [
        { title: "Editor", path: "/editorp" },
        { title: "Mail Box", path: "/mailboxp" },
        { title: "Chat", path: "/chatp" },
        { title: "FAQ", path: "/faqp" },
      ],
    },
    {
      title: "UI Kits",
      icon: <LiaMedkitSolid  className="text-[#64C5B1] " />,
      subdata: [
        { title: "Colors", path: "/colors" },
        { title: "Alerts", path: "/alerts" },
        { title: "Buttons", path: "/buttons" },
        { title: "Modal", path: "/modal" },
        { title: "Dropdowns", path: "/dropdowns" },
        { title: "Badges", path: "/badges" },
        { title: "Loading Indicators", path: "/loadingindicators" },
        { title: "State Color", path: "/statecolor" },
        { title: "Typography", path: "/typography" },
        { title: "Date Picker", path: "/datepicker" },
      ],
    },
    {
      title: "Forms",
      icon: <FaWpforms className="text-[#64C5B1] " />,
      subdata: [
        { title: "Basic Elements", path: "/basicelementsp" },
        { title: "Groups", path: "/groupsp" },
        { title: "Max Length", path: "/maxLengthp" },
        { title: "Layouts", path: "/layoutp" },
      ],
    },
    {
      title: "Board",
      icon: <CiViewBoard  className="text-[#64C5B1] " />,
      path: "/borderp",
    },
    {
      title: "Invoice",
      icon: <PiInvoiceLight  className="text-[#64C5B1] " />,
      path: "/invoicep",
    },
    {
      title: "Calander",
      icon: <CiCalendarDate  className="text-[#64C5B1] " />,
    },
    {
      title: "Products",
      icon: <MdProductionQuantityLimits  className="text-[#64C5B1] " />,
      subdata: [
        { title: "Products", path: "/productsp" },
        { title: "Product Details", path: "/productsdetailsp" },
        { title: "Cart", path: "/cartp" },
        { title: "Checkout", path: "/checkoutp" },
      ],
    },
    {
      title: "Animation",
      icon: <FaFilm className="text-[#64C5B1] " />,
      subdata: [
        { title: "Animate" },
        { title: "Scroll revel" },
        { title: "Tilt Animation" },
      ],
    },
    {
      title: "Components",
      icon: <LuComponent  className="text-[#64C5B1] " />,
      subdata: [
        { title: "Accordians" },
        { title: "Scrollable" },
        { title: "Notifications" },
        { title: "Crousel" },
        { title: "Pagination" },
      ],
    },
    {
      title: "Table",
      icon: <CiViewTable  className="text-[#64C5B1] " />,
      subdata: [{ title: "Data Tables" }, { title: "Bootstrap" }],
    },
    {
      title: "Cards",
      icon: <IoCardOutline  className="text-[#64C5B1] " />,
      subdata: [
        { title: "Basic Card" },
        { title: "Theme Card" },
        { title: "Draggable Card" },
      ],
    },
    {
      title: "Widgets",
      icon: <MdOutlineWidgets  className="text-[#64C5B1] " />,
      subdata: [{ title: "Chart Boxes 1" }, { title: "Profile Box" }],
    },
    {
      title: "Maps",
      icon: <GrMap  className="text-[#64C5B1] " />,
      subdata: [{ title: "Maps Js" }, { title: "Vector Maps" }],
    },
    {
      title: "Pages",
      icon: <LiaPagerSolid  className="text-[#64C5B1] " />,
      subdata: [
        { title: "Login" },
        { title: "Register" },
        { title: "Error 404" },
        { title: "Error 500" },
        { title: "Forgot Password" },
        { title: "Gallery" },
      ],
    },
  ];

  return (
    <div className="">
      <aside className="flex flex-col gap-10 py-4 px-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-[23px]" />
          <h1 className="font-semibold text-2xl font-mono tracking-tight ">Salessa</h1>
        </div>
        <div className="grid gap-9 text-lg  font-thin tracking-wider ">
          {sidebarData.map((val, i) => (
            <div key={i}>
              {val.subdata ? (
                <div
                  onClick={() => {
                    setShow(Show === i ? null : i)}}
                  className="flex gap-1 justify-between items-center cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    {val.icon}
                    <h1>{val.title}</h1>
                  </div>
                  {Show === i ? (
                    <MdKeyboardArrowDown className="text-xl  text-gray-400" />
                  ) : (
                    <MdKeyboardArrowRight className="text-xl text-gray-400" />
                  )}
                </div>
              ) : (
                <Link
                  to={val.path}
                  className="flex gap-10 justify-between items-center"
                >
                  <div className="flex items-center gap-6">
                    {val.icon}
                    <h1>{val.title}</h1>
                  </div>
                </Link>
              )}
              {
                <div
                  className={` flex flex-col gap-2   text-gray-500 
                  ${
                    Show === i 
                      ? "opacity-100  max-h-32 overflow-scroll  "
                      : "opacity-0 h-0 "
                  }
                transition-all ease-in-out duration-700 delay-75 w-8/12 mx-auto`}
                >
                  {val.subdata && val.subdata.map((item, ind) => (
                    <Link key={ind} to={item.path}>
                      <div>{item.title}</div>
                    </Link>
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
