import "../output.css";
import LoginButton from "../helpers/LoginFunction";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { authVerify0 } from "../atoms/authCheck";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonArguments = { email, password };
  // eslint-disable-next-line
  const [auth, setAuth] = useRecoilState(authVerify0);
  let navigate = useNavigate();

  return (
    <div
      className={`hero ${auth && "main-window"} ${
        !auth && "main-window-2"
      } bg-slate-900`}
    >
      <div className="hero-content justify-center flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold ">Login now!</h1>
          <p className="py-6 md:flex hidden">
            Welcome back! Login with your credentials, so you can get back to
            the action! Your family needs your help, capiche?
          </p>
        </div>
        <div className="card max-h-96 shrink w-full max-w-sm shadow-2xl bg-slate-800">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(event) => setPassword(event.target.value)}
              />
              <label className="label">
                <a
                  href="http://localhost:3001"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={async () => {
                  if (await LoginButton(buttonArguments)) {
                    setAuth(true);
                    navigate("/", { replace: true });
                  } else {
                    setAuth(false);
                  }
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
