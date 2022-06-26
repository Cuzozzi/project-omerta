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

const axios = require("axios");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-flex flex-row justify-around content-center navbar bg-slate-700">
          <p className="text-xl">Project Omerta</p>
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
          <Link to="/rules" className="btn btn-ghost normal-case text-xl w-max">
            Rules
          </Link>
        </div>
      </header>
      <main>
        <div className="gameplay-bar inline-flex">
          <div className="w-32 px-20 inline-flex flex-col content-between navbar gap-10 bg-slate-800">
            <Link
              to="/character"
              className="mt-10 btn btn-ghost normal-case text-xl"
            >
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
              className="mb-10 btn btn-ghost normal-case text-xl"
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/team" element={<Team />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function Home() {
  return (
    <main>
      <div className="h-full w-full p-5 inline-flex flex-row content-between">
        <div className="w-96 h-100 card m-4 bg-slate-900">
          <figure>
            <img src="images/wel-to-fam.jpg" alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title pb-4">Welcome to the Family!</h2>
            <p>
              Create a character now! Make friends, enemies, and most
              importantly family. Make sure to create or join a family, the game
              is easier when you band together!
            </p>
            <p className="pt-4">
              Project Omerta is a massively multiplayer game focused on
              player-to-player interaction and community. You will thrive
              further, and fall easier when you have someone backing you up.
            </p>
          </div>
        </div>
        <div className="w-96 h-100 card m-4 bg-slate-900">
          <figure className="h-64">
            <img src="images/empire.jpg" alt="" className="h-64 w-96" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title pb-4">Take control of your empire!</h2>
            <p>
              Run your empire how you want! You will have plenty of
              opportunities at your feet, whether by yourself or with your
              family. Just make sure to keep a tight grip on power.
            </p>
            <p className="pt-4">
              Take control of map tiles so you can build rackets, safehouses,
              compounds, or infrastructure. Rise to the top, by force or through
              deals. Make clever trades and deals so you can consolidate your
              power.
            </p>
          </div>
        </div>
        <div className="w-96 h-100 card m-4 bg-slate-900">
          <figure>
            <img src="images/chess.jpg" alt="" className="h-64 w-96" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title pb-4">Fight your way to the top!</h2>
            <p>
              When you can't talk it out over the table, show them who's boss!
              Take down other families with sheer force and destruction. In this
              life, nothing is out of the question.
            </p>
            <p className="pt-4">
              You have plenty of tools at your disposal to take what is yours!
              Fight it out with warfare, espionage, bribing officials, or take
              over politics itself. Make sure they know where they stand,
              capiche?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
