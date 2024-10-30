import React, { useState } from "react";
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
  FaTable,
  FaThList,
  FaMapMarkedAlt,
  FaFileAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  // State for toggling dropdowns
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isUiKitsOpen, setIsUiKitsOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isChartsopen, setIsChartsOpen] = useState(false);


  return (
    <div className="">
      <aside className="flex  flex-col gap-10 py-10 px-10 ">
        <div>
          <h1 className="font-semibold text-2xl">Salessa</h1>
        </div>

        <div className="flex flex-col gap-12 text-lg cursor-pointer">
          {/* Dashboard Dropdown */}
          <div className="flex flex-col gap-5 ">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            >
              <div className="flex gap-5 items-center">
                <FaHome className="text-[#64C5B1] text-xl" />
                <h1> Dashboard</h1>
              </div>
              {isDashboardOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isDashboardOpen && (
              <div className="ml-8 flex flex-col gap-3">
                <Link to="/">Sales</Link>
                <Link to="/defaultp">Default</Link>
                <Link to="/darkmenup">Dark Menu</Link>
              </div>
            )}
          </div>

          {/* Apps Dropdown */}
          <div className="flex flex-col gap-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsAppsOpen(!isAppsOpen)}
            >
              <div className="flex gap-5 items-center">
                <FaAppStore className="text-[#64C5B1] text-xl" />
                <h1> Apps</h1>
              </div>
              {isAppsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isAppsOpen && (
              <div className="ml-8 flex flex-col gap-3">
                <Link to="/editorp">Editor</Link>
                <Link to="/mailboxp">Mail Box</Link>
                <Link to="/chatp">Chat</Link>
                <Link to="/faqp">FAQ</Link>

              </div>
            )}
          </div>

          {/* UI Kits Dropdown */}
          <div className="flex flex-col gap-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsUiKitsOpen(!isUiKitsOpen)}
            >
              <div className="flex gap-5 items-center">
                <FaClipboardList className="text-[#64C5B1] text-xl" />
                <h1> UI Kits</h1>
              </div>
              {isUiKitsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isUiKitsOpen && (
              <div className="ml-8 flex flex-col gap-3">
                <Link to="/colors">Colors</Link>
                <Link to="/alerts">Alerts</Link>
                <Link to="/buttons">Buttons</Link>
                <Link to="/modal">Modal</Link>
                <Link to="/dropdowns">Dropdowns</Link>
                <Link to="/badges">Badges</Link>
                <Link to="/loadingindicators">Loading Indicators</Link>
                <Link to="/statecolor">State Color</Link>
                <Link to="/typography">Typography</Link>
                <Link to="/datepicker">Date Picker</Link>





              </div>
            )}
          </div>

          {/* Forms Dropdown */}
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

          {/* Other Menu Items */}
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
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
