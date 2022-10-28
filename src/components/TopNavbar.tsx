import LogoutButton from "./LogoutButton";
import MobileLogoutButton from "./MobileLogoutButton";
import NavLink from "./NavLink";
import GamebarLink from "./GamebarLink";
import { useRecoilValue } from "recoil";
import { userAuth } from "../atoms/userAuth";
import { adminAuth } from "../atoms/adminAuth";
import { superAdminAuth } from "../atoms/superAdminAuth";

function TopNavbar() {
  const auth = useRecoilValue(userAuth);
  const adAuth = useRecoilValue(adminAuth);
  const suAdAuth = useRecoilValue(superAdminAuth);

  return (
    <div>
      <header className="desktop rounded-t">
        <div className="inline-flex flex-row justify-around content-center navbar bg-base-200 rounded-t">
          <p className="text-xl">Project Omerta</p>
          <NavLink path="/" domRender="Home" end />
          {auth && <NavLink path="/account" domRender="Account" />}
          {(suAdAuth || adAuth) && (
            <NavLink path="/admin-console" domRender="Admin" />
          )}
          {auth && <LogoutButton />}
          {!auth && <NavLink path="/signup" domRender="Signup" />}
          {!auth && <NavLink path="/login" domRender="Login" />}
        </div>
      </header>
      <header className="mobile rounded-t">
        <div className="inline-flex flex-row justify-around content-center navbar bg-base-200 rounded-t">
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
                className="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4"
              >
                <GamebarLink path="/" domRender="Home" />
                {(suAdAuth || adAuth) && (
                  <GamebarLink path="/admin-console" domRender="Admin" />
                )}
                <GamebarLink path="/character" domRender="Character" />
                <GamebarLink path="/safehouses" domRender="Safehouses" />
                <GamebarLink path="/rackets" domRender="Rackets" />
                <GamebarLink path="/family" domRender="Family" />
                <GamebarLink path="/politics" domRender="Politics" />
                <GamebarLink path="/trading" domRender="Trading" />
                <GamebarLink path="/intelligence" domRender="Intelligence" />
                <MobileLogoutButton />
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default TopNavbar;
