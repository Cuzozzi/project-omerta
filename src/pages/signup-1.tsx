import "../output.css";
import { useState } from "react";
import SingupButton from "../helpers/SignupButton";
import { useNavigate } from "react-router-dom";
import {
  ValidateUsername,
  ValidateEmail,
  ValidatePassword,
} from "../helpers/AuthValidators";

function Signup1() {
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passVerify, setPassVerify] = useState(false);
  const [username, setUsername] = useState("");
  const [userVerify, setUserVerify] = useState(false);
  const [error, setError] = useState(false);

  const SignupButtonArgs = { email, password, username };
  const navigate = useNavigate();

  return (
    <main className="main-window-2 bg-hello-img bg-cover border-4 rounded border-slate-900 flex justify-center items-center flex-col">
      <div>
        <ul className="steps mt-5">
          {error ? (
            <li className="step step-primary step-error">Register</li>
          ) : (
            <li className="step step-primary">Register</li>
          )}
          <li className="step">Rules</li>
          <li className="step">Character</li>
        </ul>
      </div>
      <div className="hero max-w-fit min-h-fit bg-base-200 rounded-xl p-10 blur-0 m-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Omerta</h1>
            <p className="my-5">
              Sign up below to create your account, we just need an email,
              username and passowrd! Then we can move to the next step!
            </p>
            <div
              className="tooltip form-control mb-5 w-full"
              data-tip="6-16 characters, letters and numbers only."
            >
              <input
                type="text"
                placeholder="username"
                className={
                  userVerify === true
                    ? "input w-full input-bordered input-success"
                    : "input w-full input-bordered"
                }
                onChange={(event) => {
                  setUsername(event.target.value);
                  if (ValidateUsername(event.target.value) != null) {
                    setUserVerify(true);
                  } else {
                    setUserVerify(false);
                  }
                }}
                id="username"
              />
            </div>
            <div
              className="tooltip form-control mb-5 w-full"
              data-tip="Enter a valid email address."
            >
              <input
                type="email"
                placeholder="info@site.com"
                className={
                  emailVerify === true
                    ? "input w-full input-bordered input-success"
                    : "input w-full input-bordered"
                }
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (ValidateEmail(event.target.value) != null) {
                    setEmailVerify(true);
                  } else {
                    setEmailVerify(false);
                  }
                }}
                id="email"
              />
            </div>
            <div
              className="tooltip form-control mb-5 w-full"
              data-tip="6-16 characters, at least one number and one special character."
            >
              <input
                type="password"
                placeholder="password"
                className={
                  passVerify === true
                    ? "input w-full input-bordered input-success"
                    : "input w-full input-bordered"
                }
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (ValidatePassword(event.target.value) != null) {
                    setPassVerify(true);
                  } else {
                    setPassVerify(false);
                  }
                }}
                id="password"
              />
            </div>
            <button
              disabled={
                emailVerify === true &&
                passVerify === true &&
                userVerify === true
                  ? false
                  : true
              }
              className="btn btn-primary mt-5"
              onClick={async () => {
                if ((await SingupButton(SignupButtonArgs)) === true) {
                  navigate("/signup-2", { replace: true });
                } else {
                  setError(true);
                }
              }}
            >
              Create Account!
            </button>
            {error === true ? (
              <p className="text-red-600">
                Account creation failed, please try again!
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup1;
