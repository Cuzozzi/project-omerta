import LogoutButton from "./LogoutButton";
import NavLink from "./NavLink";
import { useRecoilValue } from "recoil";
import { authVerify0 } from "../atoms/authCheck";
import { adminAuth } from "../atoms/adminAuthCheck";

function TopNavbar() {
  const auth = useRecoilValue(authVerify0);
  const adAuth = useRecoilValue(adminAuth);

  return (
    <header className="rounded-t">
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
  );
}

export default TopNavbar;
