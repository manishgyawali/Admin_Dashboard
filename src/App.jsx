import "./App.css";
import Sidebar from "./Components/Common/Sidedbar/Sidebar";
import TopNav from "./Components/Common/TopNavigation/TopNav";

function App() {
  return <>
<div className="flex h-screen ">
<aside className="w-1/5 h-screen overflow-y-auto sticky top-0">
          <Sidebar />
        </aside>
        
        <div className="flex-grow">
          <TopNav />
          
        
        </div>
      </div>
  </>;
}

export default App;
