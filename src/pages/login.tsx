import "../output.css";
import LoginButton from "../helpers/LoginFunction";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAuth } from "../atoms/userAuth";
import { adminAuth } from "../atoms/adminAuth";
import { superAdminAuth } from "../atoms/superAdminAuth";
import { modAuth } from "../atoms/modAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonArguments = { email, password };
  const [user, setUser] = useRecoilState(userAuth);
  const setAdmin = useSetRecoilState(adminAuth);
  const setSuperAdmin = useSetRecoilState(superAdminAuth);
  const setMod = useSetRecoilState(modAuth);
  let navigate = useNavigate();

  return (
    <div
      className={`hero ${user && "main-window"} ${
        !user && "main-window-2"
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
                  const response = await LoginButton(buttonArguments);
                  if (response.error) {
                    setUser(false);
                    setMod(false);
                    setAdmin(false);
                    setSuperAdmin(false);
                  } else {
                    setUser(true);
                    setMod(response.moderator);
                    setAdmin(response.admin);
                    setSuperAdmin(response.super_admin);
                    navigate(
                      response.super_admin || response.admin
                        ? "/admin-console"
                        : "/account",
                      { replace: true }
                    );
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
