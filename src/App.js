import { Link } from "react-router-dom";
import "./output.css";
import { authVerify0 } from "./atoms/authCheck";
import { adminAuth } from "./atoms/adminAuthCheck";
import { useRecoilValue } from "recoil";
import AllRoutes from "./components/routes.tsx";
import LogoutButton from "./components/LogoutButton";

function App() {
  const auth = useRecoilValue(authVerify0);
  const adAuth = useRecoilValue(adminAuth);

  if (auth && adAuth === "true") {
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
              <Link
                to="/admin-console"
                className="btn btn-ghost normal-case text-xl"
              >
                Admin
              </Link>
              <LogoutButton />
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
              <AllRoutes />
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
  } else if (auth) {
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
              <LogoutButton />
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
              <AllRoutes />
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
              <AllRoutes />
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

export default App;
