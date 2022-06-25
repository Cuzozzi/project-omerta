import { Routes, Route, Link } from "react-router-dom";
import "./output.css";
import About from "./pages/about";
import Account from "./pages/account";
import Rules from "./pages/rules";
import Team from "./pages/team";
import Character from "./pages/character";
import Safehouses from "./pages/safehouses";
import Map from "./pages/map";
import Rackets from "./pages/rackets";
import Family from "./pages/family";
import Politics from "./pages/politics";
import Trading from "./pages/trading";
import Intelligence from "./pages/intelligence";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-row justify-around content-center navbar bg-slate-700">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost normal-case text-xl">
            About
          </Link>
          <Link to="/account" className="btn btn-ghost normal-case text-xl">
            Account
          </Link>
          <Link to="/team" className="btn btn-ghost normal-case text-xl">
            Team
          </Link>
          <Link to="/rules" className="btn btn-ghost normal-case text-xl">
            Rules
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/team" element={<Team />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </header>
      <main>
        <div className="gameplay-bar">
          <div className="w-32 mr-5 inline-flex flex-col content-between navbar">
            <Link to="/character" className="btn btn-ghost normal-case text-xl">
              Character
            </Link>
            <Link
              to="/safehouses"
              className="btn btn-ghost normal-case text-xl"
            >
              Safehouses
            </Link>
            <Link to="/map" className="btn btn-ghost normal-case text-xl">
              Map
            </Link>
            <Link to="/rackets" className="btn btn-ghost normal-case text-xl">
              Rackets
            </Link>
            <Link to="/family" className="btn btn-ghost normal-case text-xl">
              Family
            </Link>
            <Link to="/politics" className="btn btn-ghost normal-case text-xl">
              Politics
            </Link>
            <Link to="/trading" className="btn btn-ghost normal-case text-xl">
              Trading
            </Link>
            <Link
              to="/intelligence"
              className="btn btn-ghost normal-case text-xl"
            >
              Intelligence
            </Link>
          </div>
          <Routes>
            <Route path="/character" element={<Character />} />
            <Route path="/safehouses" element={<Safehouses />} />
            <Route path="/map" element={<Map />} />
            <Route path="/rackets" element={<Rackets />} />
            <Route path="/family" element={<Family />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/intelligence" element={<Intelligence />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function Home() {
  return <main></main>;
}

export default App;
