import MobileLogoutButton from "./MobileLogoutButton";
import { useState } from "react";
import NavLink from "./NavLink";

import { useRecoilValue } from "recoil";
import { userAuth } from "../atoms/userAuth";
import { adminAuth } from "../atoms/adminAuth";
import { superAdminAuth } from "../atoms/superAdminAuth";

export default function SideNavbar() {
  const auth = useRecoilValue(userAuth);
  const adAuth = useRecoilValue(adminAuth);
  const suAdAuth = useRecoilValue(superAdminAuth);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && (
        <ul className="menu menu-vertical bg-base-100 w-72 sidebar p-0 fixed top-0 left-0 bottom-auto z-40">
          <li className="menu-title text-center m-6 text-2xl">
            Project Omerta
          </li>
          <li>
            <NavLink
              path="/"
              domRender="Home"
              icon={<i className="fa-solid fa-house"></i>}
              end
            />
          </li>
          {!auth && (
            <>
              <li>
                <NavLink
                  path="/signup"
                  domRender="Signup"
                  icon={<i className="fa-solid fa-user-plus"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/login"
                  domRender="Login"
                  icon={<i className="fa-solid fa-arrow-right-to-bracket"></i>}
                />
              </li>
            </>
          )}
          {(suAdAuth || adAuth) && (
            <li>
              <NavLink
                path="/admin-console"
                domRender="Admin"
                icon={<i className="fa-brands fa-adn"></i>}
              />
            </li>
          )}
          {auth && (
            <>
              <li>
                <NavLink
                  path="/account"
                  domRender="Account"
                  icon={<i className="fa-solid fa-user-shield"></i>}
                />
              </li>
              <li>
                <MobileLogoutButton />
              </li>
              <li className="menu-title text-center">
                <span>Gamebar</span>
              </li>
              <li>
                <NavLink
                  path="/map"
                  domRender="Map"
                  icon={<i className="fa-solid fa-earth-europe"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/character"
                  domRender="Character"
                  icon={<i className="fa-solid fa-person"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/safehouses"
                  domRender="Safehouses"
                  icon={<i className="fa-solid fa-house-flag"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/rackets"
                  domRender="Rackets"
                  icon={<i className="fa-solid fa-warehouse"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/family"
                  domRender="Family"
                  icon={<i className="fa-solid fa-users"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/politics"
                  domRender="Politics"
                  icon={<i className="fa-solid fa-user-tag"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/trading"
                  domRender="Trading"
                  icon={<i className="fa-solid fa-money-bill-trend-up"></i>}
                />
              </li>
              <li>
                <NavLink
                  path="/intelligence"
                  domRender="Intelligence"
                  icon={<i className="fa-solid fa-brain"></i>}
                />
              </li>
            </>
          )}
          <li className="menu-title text-center">
            <span>Footer</span>
          </li>
          <li>
            <NavLink
              path="/team"
              domRender="Our Team"
              icon={<i className="fa-solid fa-people-group"></i>}
            />
          </li>
          <li>
            <NavLink
              path="/rules"
              domRender="Rules"
              icon={<i className="fa-solid fa-book"></i>}
            />
          </li>
        </ul>
      )}
      <button
        className="fixed w-6 top-0 left-0 bottom-auto z-50"
        onClick={() => {
          if (toggle) {
            setToggle(false);
          } else {
            setToggle(true);
          }
        }}
      >
        {!toggle ? (
          <i className="fa-solid fa-chevron-right"></i>
        ) : (
          <i className="fa-solid fa-chevron-left"></i>
        )}
      </button>
    </>
  );
}
