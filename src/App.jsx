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
            </Routes>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
