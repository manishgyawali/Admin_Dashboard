import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./Components/Common/TopNavigation/TopNav";
import SalesP from "./Components/Pages/SalesP";
import DefaultP from "./Components/Pages/DefaultP";
import DarkMenuP from "./Components/Pages/DarkMenuP";
import Sidebar from "./Components/Common/Sidedbar/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-1/5 h-screen overflow-y-auto sticky top-0">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          <TopNav />

          <div className="p-10">
            <Routes>
              <Route path="/" element={<SalesP />} />
              <Route path="/defaultp" element={<DefaultP />} />
              <Route path="/darkmenup" element={<DarkMenuP />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
