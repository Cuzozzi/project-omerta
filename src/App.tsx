import "./output.css";
import MainAppPage from "./components/MainAppPage";
import SideNavBar from "./components/SideNavbar";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => console.log("Render Check"), []);

  useEffect(() => {
    themeChange(false);
  }, []);

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
