import LogoutButton from "./LogoutButton";
import NavLink from "./NavLink";
import GamebarLink from "./GamebarLink";
import Logout from "../helpers/LogoutFunction";
import { useRecoilValue, useRecoilState } from "recoil";
import { authVerify0 } from "../atoms/authCheck";
import { adminAuth } from "../atoms/adminAuthCheck";
import { useNavigate } from "react-router-dom";

function TopNavbar() {
  const [auth, setAuth] = useRecoilState(authVerify0);
  const adAuth = useRecoilValue(adminAuth);
  const navigate = useNavigate();
  return (
    <div>
      <header className="desktop rounded-t">
        <div className="inline-flex flex-row justify-around content-center navbar bg-slate-700 rounded-t">
          <p className="text-xl">Project Omerta</p>
          <NavLink path="/" domRender="Home" />
          {auth && <NavLink path="/account" domRender="Account" />}
          {auth && adAuth === "true" && (
            <NavLink path="/admin-console" domRender="Admin" />
          )}
          {auth && <LogoutButton />}
          {!auth && <NavLink path="/signup" domRender="Signup" />}
          {!auth && <NavLink path="/login" domRender="Login" />}
        </div>
      </header>
      <header className="mobile rounded-t">
        <div className="inline-flex flex-row justify-around content-center navbar bg-slate-700 rounded-t">
          {auth && <NavLink path="/account" domRender="Account" />}
          {!auth && <NavLink path="/login" domRender="Login" />}
          <p className="text-xl">Project Omerta</p>
          {!auth && <NavLink path="/signup" domRender="Signup" />}
          {auth && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost normal-case text-xl">
                Dropdown
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <GamebarLink path="/" domRender="Home" />
                {auth && adAuth === "true" && (
                  <GamebarLink path="/admin-console" domRender="Admin" />
                )}
                <GamebarLink path="/character" domRender="Character" />
                <GamebarLink path="/safehouses" domRender="Safehouses" />
                <GamebarLink path="/rackets" domRender="Rackets" />
                <GamebarLink path="/family" domRender="Family" />
                <GamebarLink path="/politics" domRender="Politics" />
                <GamebarLink path="/trading" domRender="Trading" />
                <GamebarLink path="/intelligence" domRender="Intelligence" />
                <GamebarLink
                  path="/login"
                  domRender="Logout"
                  logout={async () => {
                    if (Logout() === false) {
                      setAuth(false);
                      navigate("/", { replace: true });
                    } else {
                      console.log("broke");
                    }
                  }}
                />
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default TopNavbar;
