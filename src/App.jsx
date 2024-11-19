import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./Components/Common/TopNavigation/TopNav";
import SalesP from "./Components/Pages/SalesP";
import DefaultP from "./Components/Pages/DefaultP";
import DarkMenuP from "./Components/Pages/DarkMenuP";
import Sidebar from "./Components/Common/Sidedbar/Sidebar";
import Footer from "./Components/Common/Footer/Footer";
import EditorP from "./Components/Pages/EditorP";
import MailBoxP from "./Components/Pages/MailBoxP";
import ChatP from "./Components/Pages/ChatP";
import FaqP from "./Components/Pages/FaqP";
import Colors from "./Components/Pages/Ui kits/Colors";
import Typography from "./Components/Pages/Ui kits/Typography";
import StateColor from "./Components/Pages/Ui kits/StateColor";
import Modal from "./Components/Pages/Ui kits/Modal";
import LOadingIndicators from "./Components/Pages/Ui kits/LOadingIndicators";
import DatePicker from "./Components/Pages/Ui kits/DatePicker";
import Badges from "./Components/Pages/Ui kits/Badges";
import Alerts from "./Components/Pages/Ui kits/Alerts";
import Dropdowns from "./Components/Pages/Ui kits/Dropdowns";
import Buttons from "./Components/Pages/Ui kits/Buttons";
import InvoiceP from "./Components/Pages/InvoiceP";
import ProductsP from "./Components/Pages/Products/ProductsP";
import ProductsDetailsP from "./Components/Pages/Products/ProductsDetailsP";
import CartP from "./Components/Pages/Products/CartP";
import CheckoutP from "./Components/Pages/Products/CheckoutP";
import ChartJs from "./Components/Pages/Charts/ChartJs";
import ApexCharts from 'apexcharts'
import BasicElementsP from './Components/Pages/Forms/BasicElementsP';
import GroupsP from './Components/Pages/Forms/GroupsP';
import LayoutP from './Components/Pages/Forms/LayoutP';
import MaxLengthP from './Components/Pages/Forms/MaxLengthP';
import BorderP from './Components/Pages/Border/BorderP';
function App() {

  
  return (
   <div>
    <div id="chart">
    </div>
     <Router>
      <div className="grid grid-cols-11 h-screen overflow-clip ">
        <aside className="col-span-2 h-[590px] scroll  overflow-scroll">
          <Sidebar />
        </aside>

        <div className="col-span-9 h-full  ">
          <TopNav />

          <div className="h-[500px]  scroll overflow-scroll pb-24">
            <Routes>
              <Route path="/" element={<SalesP />} />
              <Route path="/defaultp" element={<DefaultP />} />
              <Route path="/darkmenup" element={<DarkMenuP />} />
              <Route path="/editorp" element={<EditorP />} />
              <Route path="/mailboxp" element={<MailBoxP />} />
              <Route path="/chatp" element={<ChatP />} />
              <Route path="/faqp" element={<FaqP />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/datepicker" element={<DatePicker />} />
              <Route
                path="/loadingindicators"
                element={<LOadingIndicators />}
              />
              <Route path="/modal" element={<Modal />} />
              <Route path="/statecolor" element={<StateColor />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/dropdowns" element={<Dropdowns />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/invoicep" element={<InvoiceP />} />
              <Route path="/productsp" element={<ProductsP />} />
              <Route path="/productsdetailsp" element={<ProductsDetailsP />} />
              <Route path="/cartp" element={<CartP />} />
              <Route path="/checkoutp" element={<CheckoutP />} />
              <Route path="/chartjs" element={<ChartJs />} />
              <Route path="/basicelementsp" element={<BasicElementsP />} />
              <Route path="/groupsp" element={<GroupsP />} />
              <Route path="/layoutp" element={<LayoutP />} />
              <Route path="/maxLengthp" element={<MaxLengthP />} />
              <Route path="/borderp" element={<BorderP />} />

            </Routes>
            <Footer />
            </div>
        </div>
      </div>
    </Router>
   </div>
  );
}

export default App;
