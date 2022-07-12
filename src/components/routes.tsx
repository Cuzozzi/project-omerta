import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Account from "../pages/account";
import Rules from "../pages/rules";
import Team from "../pages/team";
import Character from "../pages/character";
import Safehouses from "../pages/safehouses";
import Map from "../pages/map";
import Rackets from "../pages/rackets";
import Family from "../pages/family";
import Politics from "../pages/politics";
import Trading from "../pages/trading";
import Intelligence from "../pages/intelligence";
import Signup from "../pages/signup";
import Signup1 from "../pages/signup-1";
import Login from "../pages/login";
import Home from "../pages/home";
import AdminConsole from "../pages/admin-console";
import { authVerify0 } from "../atoms/authCheck";
import { adminAuth } from "../atoms/adminAuthCheck";
import { useRecoilValue } from "recoil";

function AllRoutes() {
  const auth = useRecoilValue(authVerify0);
  const adAuth = useRecoilValue(adminAuth);

  function protectedRoute(Component: React.FunctionComponent) {
    if (auth) {
      return <Component />;
    } else {
      return <Login />;
    }
  }

  function protectedAdminRoute(Component: React.FunctionComponent) {
    if (auth && adAuth === "true") {
      return <Component />;
    } else {
      return <Login />;
    }
  }

  return (
    <Routes>
      <Route path="/character" element={protectedRoute(Character)} />
      <Route path="/safehouses" element={protectedRoute(Safehouses)} />
      <Route path="/map" element={protectedRoute(Map)} />
      <Route path="/rackets" element={protectedRoute(Rackets)} />
      <Route path="/family" element={protectedRoute(Family)} />
      <Route path="/politics" element={protectedRoute(Politics)} />
      <Route path="/trading" element={protectedRoute(Trading)} />
      <Route path="/intelligence" element={protectedRoute(Intelligence)} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={protectedRoute(Account)} />
      <Route path="/team" element={<Team />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup-1" element={<Signup1 />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin-console"
        element={protectedAdminRoute(AdminConsole)}
      />
    </Routes>
  );
}

export default AllRoutes;
