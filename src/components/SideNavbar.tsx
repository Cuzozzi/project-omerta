import MobileLogoutButton from "./MobileLogoutButton";
import { useState } from "react";
import NavLink from "./NavLink";

import { useRecoilValue } from "recoil";
import { userAuth } from "../atoms/userAuth";
import { adminAuth } from "../atoms/adminAuth";
import { superAdminAuth } from "../atoms/superAdminAuth";

export default function TopNavbar() {
  const auth = useRecoilValue(userAuth);
  const adAuth = useRecoilValue(adminAuth);
  const suAdAuth = useRecoilValue(superAdminAuth);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && (
        <ul className="menu menu-vertical bg-base-100 w-72 sidebar p-0 fixed top-0 left-0 bottom-auto z-40">
          <li className="text-center m-6 text-2xl">Project Omerta</li>
          <li>
            <NavLink
              path="/"
              children={[<>Home</>, <i className="fa-solid fa-house"></i>]}
              end
            />
          </li>
          {!auth && (
            <>
              <li>
                <NavLink
                  path="/signup"
                  children={[
                    <>Signup</>,
                    <i className="fa-solid fa-user-plus"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/login"
                  children={[
                    <>Login</>,
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>,
                  ]}
                />
              </li>
            </>
          )}
          {(suAdAuth || adAuth) && (
            <li>
              <NavLink
                path="/admin-console"
                children={[<>Admin</>, <i className="fa-brands fa-adn"></i>]}
              />
            </li>
          )}
          {auth && (
            <>
              <li>
                <NavLink
                  path="/account"
                  children={[
                    <>Account</>,
                    <i className="fa-solid fa-user-shield"></i>,
                  ]}
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
                  children={[
                    <>Map</>,
                    <i className="fa-solid fa-earth-europe"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/character"
                  children={[
                    <>Character</>,
                    <i className="fa-solid fa-person"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/safehouses"
                  children={[
                    <>Safehouses</>,
                    <i className="fa-solid fa-house-flag"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/rackets"
                  children={[
                    <>Rackets</>,
                    <i className="fa-solid fa-warehouse"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/family"
                  children={[
                    <>Family</>,
                    <i className="fa-solid fa-users"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/politics"
                  children={[
                    <>Politics</>,
                    <i className="fa-solid fa-user-tag"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/trading"
                  children={[
                    <>Trading</>,
                    <i className="fa-solid fa-money-bill-trend-up"></i>,
                  ]}
                />
              </li>
              <li>
                <NavLink
                  path="/intelligence"
                  children={[
                    <>Intelligence</>,
                    <i className="fa-solid fa-brain"></i>,
                  ]}
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
              children={[
                <>Our Team</>,
                <i className="fa-solid fa-people-group"></i>,
              ]}
            />
          </li>
          <li>
            <NavLink
              path="/rules"
              children={[<>Rules</>, <i className="fa-solid fa-book"></i>]}
            />
          </li>
          <li className="w-26 mx-auto"></li>
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
