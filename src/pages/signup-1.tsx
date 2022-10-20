import "../output.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SingupButton from "../helpers/SignupButton";

//import { useNavigate } from "react-router-dom";

function Signup1() {
  //let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const SignupButtonArgs = { email, password, username };
  return (
    <main className="main-window-2 bg-hello-img bg-cover flex justify-center items-center flex-col">
      <div className="mb-6">
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step">Rules</li>
          <li className="step">Character</li>
        </ul>
      </div>
      <div className="hero max-w-fit min-h-fit bg-base-200 rounded-xl p-10 blur-0">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Omerta</h1>
            <p className="py-6">
              Sign up below to create your account, we just need an email,
              username and passowrd! Then we can move to the next step!
            </p>
            <div className="form-control mb-10">
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                onChange={(event) => setUsername(event.target.value)}
                id="username"
              />
            </div>
            <div className="form-control mb-10">
              <input
                type="email"
                placeholder="info@site.com"
                className="input input-bordered"
                onChange={(event) => setEmail(event.target.value)}
                id="email"
              />
            </div>
            <div className="form-control mb-10">
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(event) => setPassword(event.target.value)}
                id="password"
              />
            </div>
            <Link
              to="/signup-1"
              className="btn btn-primary"
              onClick={() => SingupButton(SignupButtonArgs)}
            >
              Create Account!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup1;
