import axios from "axios";
import { useRecoilState } from "recoil";
import { authVerify0 } from "../atoms/authCheck";

function Logout() {
  const [auth, setAuth] = useRecoilState(authVerify0);
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_SERVER_PORT}/api/logout`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  localStorage.removeItem("token");
  localStorage.setItem("isAdmin", "false");
  setAuth(false);
  window.location.replace("/login");
}

export default Logout;
