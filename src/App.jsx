import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./Components/Common/TopNavigation/TopNav";
import SalesP from "./Components/Pages/SalesP";
import DefaultP from "./Components/Pages/DefaultP";
import DarkMenuP from "./Components/Pages/DarkMenuP";
import Sidebar from "./Components/Common/Sidedbar/Sidebar";
import Footer from "./Components/Common/Footer/Footer";
import EditorP from './Components/Pages/EditorP';
import MailBoxP from './Components/Pages/MailBoxP';
import ChatP from "./Components/Pages/ChatP";
import FaqP from './Components/Pages/FaqP';
import Colors from './Components/Pages/Ui kits/Colors';
import Typography from './Components/Pages/Ui kits/Typography';
import StateColor from './Components/Pages/Ui kits/StateColor';
import Modal from './Components/Pages/Ui kits/Modal';
import LOadingIndicators from './Components/Pages/Ui kits/LOadingIndicators';
import DatePicker from './Components/Pages/Ui kits/DatePicker';
import Badges from './Components/Pages/Ui kits/Badges';
import Alerts from './Components/Pages/Ui kits/Alerts';
import Dropdowns from './Components/Pages/Ui kits/Dropdowns';
import Buttons from './Components/Pages/Ui kits/Buttons';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <aside className="w-1/5 h-screen overflow-y-auto sticky top-0">
          <Sidebar />
        </aside>

        <div className="flex-grow">
          <TopNav />

          <div className="">
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
              <Route path="/loadingindicators" element={<LOadingIndicators />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/statecolor" element={<StateColor />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/dropdowns" element={<Dropdowns />} />
              <Route path="/buttons" element={<Buttons />} />

            </Routes>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
