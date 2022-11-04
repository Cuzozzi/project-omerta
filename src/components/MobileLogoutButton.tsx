import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userAuth } from "../atoms/userAuth";
import { adminAuth } from "../atoms/adminAuth";
import { superAdminAuth } from "../atoms/superAdminAuth";
import { modAuth } from "../atoms/modAuth";

function MobileLogoutButton() {
  const setUser = useSetRecoilState(userAuth);
  const setAdmin = useSetRecoilState(adminAuth);
  const setSuperAdmin = useSetRecoilState(superAdminAuth);
  const setMod = useSetRecoilState(modAuth);
  let navigate = useNavigate();
  return (
    <button
      className="btn btn-ghost bold"
      onClick={() => {
        axios({
          method: "delete",
          url: `${process.env.REACT_APP_SERVER_PORT}/api/logout`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        localStorage.removeItem("token");
        setUser(false);
        setMod(false);
        setAdmin(false);
        setSuperAdmin(false);
        navigate("/", { replace: true });
      }}
    >
      Logout
      <i className="fa-solid fa-arrow-right-from-bracket"></i>
    </button>
  );
}

export default MobileLogoutButton;
