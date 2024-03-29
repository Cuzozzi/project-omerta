import { Routes, Route, Navigate } from "react-router-dom";
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
import Signup2 from "../pages/signup-2";
import Login from "../pages/login";
import Home from "../pages/home";
import AdminConsole from "../pages/admin-console";
import { userAuth } from "../atoms/userAuth";
import { adminAuth } from "../atoms/adminAuth";
import { superAdminAuth } from "../atoms/superAdminAuth";
import { modAuth } from "../atoms/modAuth";
import { useRecoilValue } from "recoil";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useRecoilValue(userAuth);
  if (!auth) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

function AdminRoute({ children }: { children: JSX.Element }) {
  const mAuth = useRecoilValue(modAuth);
  const aAuth = useRecoilValue(adminAuth);
  const sAuth = useRecoilValue(superAdminAuth);
  if (mAuth || aAuth || sAuth) {
    return children;
  } else return <Navigate to="/" />;
}

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/character"
        element={<ProtectedRoute children={<Character />} />}
      />
      <Route
        path="/safehouses"
        element={<ProtectedRoute children={<Safehouses />} />}
      />
      <Route
        path="/rackets"
        element={<ProtectedRoute children={<Rackets />} />}
      />
      <Route
        path="/family"
        element={<ProtectedRoute children={<Family />} />}
      />
      <Route
        path="/politics"
        element={<ProtectedRoute children={<Politics />} />}
      />
      <Route
        path="/trading"
        element={<ProtectedRoute children={<Trading />} />}
      />
      <Route
        path="/intelligence"
        element={<ProtectedRoute children={<Intelligence />} />}
      />

      <Route
        path="/account"
        element={<ProtectedRoute children={<Account />} />}
      />
      <Route
        path="/admin-console"
        element={<AdminRoute children={<AdminConsole />} />}
      />
      <Route path="/map" element={<ProtectedRoute children={<Map />} />} />
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup-1" element={<Signup1 />} />
      <Route path="/signup-2" element={<Signup2 />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
