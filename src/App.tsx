import "./output.css";
import TopNavbar from "./components/TopNavbar";
import MainAppPage from "./components/MainAppPage";
import Footer from "./components/Footer";
import { AuthVerify } from "./atoms/authCheck";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    AuthVerify();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        <MainAppPage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
