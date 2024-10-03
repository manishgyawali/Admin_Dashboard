import React from "react";
import { FaHome, FaAppStore, FaClipboardList, FaWpforms, FaTrello, FaFileInvoiceDollar, FaCalendarAlt, FaBoxOpen, FaIcons, FaFilm, FaCog, FaTable, FaThList, FaMapMarkedAlt, FaFileAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="">
      <aside className=" flex flex-col gap-10 py-10 px-10">
        <div>
          <h1 className="font-semibold text-2xl">Salessa</h1>
        </div>
        <div className="flex flex-col gap-12 text-lg cursor-pointer">
          <div className="flex gap-5 items-center">
            <FaHome className="text-[#64C5B1] text-xl" />
            <h1> Dashboard</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaAppStore className="text-xl" />
            <h1> Apps</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaClipboardList className="text-xl" />
            <h1> UI Kits</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaWpforms className="text-xl" />
            <h1> Forms</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaTrello className="text-xl" />
            <h1> Board</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaFileInvoiceDollar className="text-xl" />
            <h1> Invoice</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaCalendarAlt className="text-xl" />
            <h1> Calander</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaBoxOpen className="text-xl" />
            <h1> Products</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaIcons className="text-xl" />
            <h1> Icons</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaFilm className="text-xl" />
            <h1> Animations</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaCog className="text-xl" />
            <h1> Components</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaTable className="text-xl" />
            <h1> Table</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaThList className="text-xl" />
            <h1> Cards</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaThList className="text-xl" />
            <h1> Widgets</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaMapMarkedAlt className="text-xl" />
            <h1> Maps</h1>
          </div>
          <div className="flex gap-5 items-center">
            <FaFileAlt className="text-xl" />
            <h1> Pages</h1>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
