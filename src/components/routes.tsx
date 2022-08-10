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

function AllRoutes() {
  return (
    <Routes>
      <Route path="/character" element={<Character />} />
      <Route path="/safehouses" element={<Safehouses />} />
      <Route path="/map" element={<Map />} />
      <Route path="/rackets" element={<Rackets />} />
      <Route path="/family" element={<Family />} />
      <Route path="/politics" element={<Politics />} />
      <Route path="/trading" element={<Trading />} />
      <Route path="/intelligence" element={<Intelligence />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/team" element={<Team />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup-1" element={<Signup1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-console" element={<AdminConsole />} />
    </Routes>
  );
}

export default AllRoutes;
