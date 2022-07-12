import "../output.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <main className="main-window-2 bg-hello-img bg-cover flex flex-1 items-center justify-center border-4 rounded border-slate-900 bg-slate-900">
      <div className="bg-slate-900 max-w-fit rounded-xl max-h-fit">
        <div className="hero max-w-fit min-h-fit bg-base-200 rounded-xl p-10 blur-0">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Please click below to get started making your account and
                character! Welcome to Project Omerta, a genre leading crime
                massively multiplayer web/text based game.
              </p>
              <Link to="/signup-1" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
