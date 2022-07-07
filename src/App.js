import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
import Signup from "./pages/signup";
import Signup1 from "./pages/signup-1";
import Login from "./pages/login";
import Admin from "./pages/admin";
import AdminConsole from "./pages/admin-console";
import axios from "axios";
import { authVerify0 } from "./atoms/authCheck";
import { adminAuth } from "./atoms/adminAuthCheck";
import { useRecoilState } from "recoil";

function App() {
  const [auth, setAuth] = useRecoilState(authVerify0);
  const [adAuth, setAdminAuth] = useRecoilState(adminAuth);
  let navigate = useNavigate();

  function protectedRoute(Component) {
    if (auth) {
      return <Component />;
    } else {
      return <Login authCheck={auth} />;
    }
  }

  function protectedAdminRoute(Component) {
    if (adAuth) {
      return <Component />;
    } else {
      return <Login authCheck={auth} />;
    }
  }

  if (auth) {
    return (
      <div className="">
        <div className="App">
          <header className="App-header rounded-t">
            <div className="inline-flex flex-row justify-around content-center navbar bg-slate-700 rounded-t">
              <p className="text-xl">Project Omerta</p>
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                Home
              </Link>
              <Link to="/account" className="btn btn-ghost normal-case text-xl">
                Account
              </Link>
              <button
                className="btn btn-ghost normal-case text-xl"
                onClick={() => {
                  let token = String(localStorage.getItem("token"));
                  console.log(token);
                  axios({
                    method: "delete",
                    url: "http://localhost:5433/authentication",
                    data: {
                      token,
                    },
                  });
                  localStorage.removeItem("token");
                  setAuth(false);
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </button>
            </div>
          </header>
          <main>
            <div className="gameplay-bar flex bg-slate-900">
              <div className="w-28 border-2 border-slate-800 justify-center items-center inline-flex flex-col navbar gap-10 bg-slate-800">
                <Link to="/character" className="btn btn-ghost bold">
                  Character
                </Link>
                <Link to="/safehouses" className="btn btn-ghost bold">
                  Safehouses
                </Link>
                <Link to="/rackets" className="btn btn-ghost bold">
                  Rackets
                </Link>
                <Link to="/family" className="btn btn-ghost bold">
                  Family
                </Link>
                <Link to="/politics" className="btn btn-ghost bold">
                  Politcs
                </Link>
                <Link to="/trading" className="btn btn-ghost bold">
                  Trading
                </Link>
                <Link to="/intelligence" className="btn btn-ghost bold">
                  Intelligence
                </Link>
              </div>
              <Routes>
                <Route path="/character" element={protectedRoute(Character)} />
                <Route
                  path="/safehouses"
                  element={protectedRoute(Safehouses)}
                />
                <Route path="/map" element={protectedRoute(Map)} />
                <Route path="/rackets" element={protectedRoute(Rackets)} />
                <Route path="/family" element={protectedRoute(Family)} />
                <Route path="/politics" element={protectedRoute(Politics)} />
                <Route path="/trading" element={protectedRoute(Trading)} />
                <Route
                  path="/intelligence"
                  element={protectedRoute(Intelligence)}
                />
                <Route path="/" element={<Home conditionValue={auth} />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={protectedRoute(Account)} />
                <Route path="/team" element={<Team />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-1" element={<Signup1 />} />
                <Route path="/login" element={<Login authCheck={auth} />} />
                <Route path="/admin" element={<Admin />} />
                <Route
                  path="/admin-console"
                  element={protectedAdminRoute(AdminConsole)}
                />
              </Routes>
            </div>
          </main>
          <footer className="footer p-4 text-base-content rounded-b items-end bg-slate-700">
            <div className="grid grid-flow-col gap-4 m-0 p-0">
              <Link to="/about" className="link link-hover">
                About us
              </Link>
              <Link to="/team" className="link link-hover">
                Our Team
              </Link>
              <Link to="/rules" className="link link-hover">
                Game Rules
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="App">
          <header className="App-header rounded-t">
            <div className="inline-flex flex-row justify-around content-center navbar bg-slate-700 rounded-t">
              <p className="text-xl">Project Omerta</p>
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                Home
              </Link>
              <Link to="/signup" className="btn btn-ghost normal-case text-xl">
                Signup
              </Link>
              <Link to="/Login" className="btn btn-ghost normal-case text-xl">
                Login
              </Link>
            </div>
          </header>
          <main>
            <div className="gameplay-bar flex bg-slate-900">
              <Routes>
                <Route path="/character" element={protectedRoute(Character)} />
                <Route
                  path="/safehouses"
                  element={protectedRoute(Safehouses)}
                />
                <Route path="/map" element={protectedRoute(Map)} />
                <Route path="/rackets" element={protectedRoute(Rackets)} />
                <Route path="/family" element={protectedRoute(Family)} />
                <Route path="/politics" element={protectedRoute(Politics)} />
                <Route path="/trading" element={protectedRoute(Trading)} />
                <Route
                  path="/intelligence"
                  element={protectedRoute(Intelligence)}
                />
                <Route path="/" element={<Home conditionValue={auth} />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={protectedRoute(Account)} />
                <Route path="/team" element={<Team />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup-1" element={<Signup1 />} />
                <Route path="/login" element={<Login authCheck={auth} />} />
                <Route path="/admin" element={<Admin />} />
                <Route
                  path="/admin-console"
                  element={protectedAdminRoute(AdminConsole)}
                />
              </Routes>
            </div>
          </main>
          <footer className="footer p-4 text-base-content rounded-b items-end bg-slate-700">
            <div className="grid grid-flow-col gap-4 m-0 p-0">
              <Link to="/about" className="link link-hover">
                About us
              </Link>
              <Link to="/team" className="link link-hover">
                Our Team
              </Link>
              <Link to="/rules" className="link link-hover">
                Game Rules
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

function Home(props) {
  if (props.conditionValue) {
    return (
      <main className="p-4 bg-slate-900 main-window">
        <div className="h-full w-full p-5 inline-flex flex-row content-between bg-slate-900 rounded">
          <div className="w-96 h-100 card m-4 bg-slate-800">
            <figure className="overflow-hidden">
              <img src="images/wel-to-fam.jpg" alt="" className="h-64" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pb-4">Welcome to the Family!</h2>
              <p>
                Create a character now! Make friends, enemies, and most
                importantly family. Make sure to create or join a family, the
                game is easier when you band together!
              </p>
              <p className="pt-4">
                Project Omerta is a massively multiplayer game focused on
                player-to-player interaction and community. You will thrive
                further, and fall easier when you have someone backing you up.
              </p>
            </div>
          </div>
          <div className="w-96 h-100 card m-4 bg-slate-800">
            <figure className="h-64 overflow-hidden">
              <img src="images/empire.jpg" alt="" className="object-fill" />
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
                compounds, or infrastructure. Rise to the top, by force or
                through deals. Make clever trades and deals so you can
                consolidate your power.
              </p>
            </div>
          </div>
          <div className="w-96 h-100 card m-4 bg-slate-800">
            <figure className="overflow-hidden">
              <img src="images/chess.jpg" alt="" className="h-64" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pb-4">Fight your way to the top!</h2>
              <p>
                When you can't talk it out over the table, show them who's boss!
                Take down other families with sheer force and destruction. In
                this life, nothing is out of the question.
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
  } else {
    return (
      <main className="p-4 bg-slate-900 main-window-2">
        <div className="h-full w-full p-5 inline-flex flex-row justify-center content-between bg-slate-900 rounded">
          <div className="w-96 h-100 card m-4 bg-slate-800">
            <figure className="overflow-hidden">
              <img src="images/wel-to-fam.jpg" alt="" className="h-64" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pb-4">Welcome to the Family!</h2>
              <p>
                Create a character now! Make friends, enemies, and most
                importantly family. Make sure to create or join a family, the
                game is easier when you band together!
              </p>
              <p className="pt-4">
                Project Omerta is a massively multiplayer game focused on
                player-to-player interaction and community. You will thrive
                further, and fall easier when you have someone backing you up.
              </p>
            </div>
          </div>
          <div className="w-96 h-100 card m-4 bg-slate-800">
            <figure className="h-64 overflow-hidden">
              <img src="images/empire.jpg" alt="" className="object-fill" />
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
                compounds, or infrastructure. Rise to the top, by force or
                through deals. Make clever trades and deals so you can
                consolidate your power.
              </p>
            </div>
          </div>
          <div className="w-96 h-100 card m-4 bg-slate-800">
            <figure className="overflow-hidden">
              <img src="images/chess.jpg" alt="" className="h-64" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pb-4">Fight your way to the top!</h2>
              <p>
                When you can't talk it out over the table, show them who's boss!
                Take down other families with sheer force and destruction. In
                this life, nothing is out of the question.
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
}

export default App;
