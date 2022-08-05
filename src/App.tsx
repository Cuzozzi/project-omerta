import "./output.css";
import TopNavbar from "./components/TopNavbar";
import MainAppPage from "./components/MainAppPage";
import Footer from "./components/Footer";
import { useRecoilState } from "recoil";
import { AuthVerify, authVerify0 } from "./atoms/authCheck";
import { useLayoutEffect } from "react";

function App() {
  const [auth, setAuth] = useRecoilState(authVerify0);

  useLayoutEffect(() => {
    const checkAuth = async () => {
      setAuth(await AuthVerify());
    };
    checkAuth();
  }, []);
  return (
    <div className="App">
      <TopNavbar />
      <MainAppPage />
      <Footer />
    </div>
  );
}

export default App;
