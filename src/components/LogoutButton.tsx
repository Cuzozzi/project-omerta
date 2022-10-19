import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authVerify0 } from "../atoms/authCheck";

function LogoutButton() {
  // eslint-disable-next-line
  const [auth, setAuth] = useRecoilState(authVerify0);
  let navigate = useNavigate();
  return (
    <button
      className="btn btn-ghost normal-case text-xl"
      onClick={() => {
        axios({
          method: "delete",
          url: `${process.env.REACT_APP_SERVER_PORT}/authentication`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        localStorage.removeItem("token");
        setAuth(false);
        navigate("/login", { replace: true });
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
