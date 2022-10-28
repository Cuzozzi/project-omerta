import "../output.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <main className="main-window bg-hello-img bg-cover flex flex-1 items-center justify-center rounded bg-base-300">
      <div className="max-w-fit rounded-xl max-h-fit">
        <div className="hero min-h-fit bg-base-100 rounded-xl p-10 blur-0">
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
