import "./output.css";
import TopNavbar from "./components/TopNavbar";
import MainAppPage from "./components/MainAppPage";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  console.log("Render Check");

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
