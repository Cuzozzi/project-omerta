import "../output.css";
import { useState } from "react";
import SingupButton from "../helpers/SignupButton";
import { useNavigate } from "react-router-dom";

//6-16 length, upper & lowercase, letters & numbers only
function validateUsername(username: string) {
  return String(username).match(/[a-zA-Z0-9]{6,16}$/);
}

//simple email validation string@string.string
function validateEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

//6 - 16 length, at least one number and one special character
function validatePassword(password: string) {
  return String(password).match(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );
}

function Signup1() {
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passVerify, setPassVerify] = useState(false);
  const [username, setUsername] = useState("");
  const [userVerify, setUserVerify] = useState(false);
  const [error, setError] = useState(false);
  const [disable1, setDisable1] = useState(true);
  const [disable2, setDisable2] = useState(true);
  const [disable3, setDisable3] = useState(true);

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
                  if (event.target.value === "") {
                    setDisable1(true);
                  } else {
                    setDisable1(false);
                    if (validateUsername(event.target.value) != null) {
                      setUserVerify(true);
                      setDisable2(false);
                    }
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
                  if (event.target.value === "") {
                    setDisable2(true);
                  } else {
                    if (validateEmail(event.target.value) != null) {
                      setEmailVerify(true);
                      setDisable2(false);
                    }
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
                  if (event.target.value === "") {
                    setDisable3(true);
                  } else {
                    if (validatePassword(event.target.value) != null) {
                      setPassVerify(true);
                      setDisable3(false);
                    }
                  }
                }}
                id="password"
              />
            </div>
            <button
              disabled={
                disable1 === false && disable2 === false && disable3 === false
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
