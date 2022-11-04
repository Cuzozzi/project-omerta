import "./output.css";
import MainAppPage from "./components/MainAppPage";
import SideNavBar from "./components/SideNavbar";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => console.log("Render Check"), []);

  return (
    <div className="App">
      <BrowserRouter>
        <SideNavBar />
        <MainAppPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
