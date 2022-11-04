import "../output.css";
import LoginButton from "../helpers/LoginFunction";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAuth } from "../atoms/userAuth";
import { adminAuth } from "../atoms/adminAuth";
import { superAdminAuth } from "../atoms/superAdminAuth";
import { modAuth } from "../atoms/modAuth";
import { useNavigate } from "react-router-dom";
import {
  ValidateIdentifier,
  ValidatePassword,
} from "../helpers/AuthValidators";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [verifyIdentifier, setVerifyIdentifier] = useState(false);
  const [password, setPassword] = useState("");
  const [verifyPass, setVerifyPass] = useState(false);
  const [user, setUser] = useRecoilState(userAuth);
  const [error, setError] = useState(false);
  const setAdmin = useSetRecoilState(adminAuth);
  const setSuperAdmin = useSetRecoilState(superAdminAuth);
  const setMod = useSetRecoilState(modAuth);
  const buttonArguments = { identifier, password };
  let navigate = useNavigate();

  return (
    <div
      className={`hero ${user && "main-window"} ${
        !user && "main-window"
      } bg-base-300`}
    >
      <div className="hero-content justify-center flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold ">Login now!</h1>
          <p className="py-6 md:flex hidden">
            Welcome back! Login with your credentials, so you can get back to
            the action! Your family needs your help, capiche?
          </p>
        </div>
        <div className="card max-h-96 shrink w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username or Email</span>
              </label>
              <input
                type="email"
                className={
                  verifyIdentifier === true
                    ? "input w-full input-bordered input-success"
                    : "input w-full input-bordered"
                }
                onChange={(event) => {
                  setIdentifier(event.target.value);
                  if (ValidateIdentifier(event.target.value) != null) {
                    setVerifyIdentifier(true);
                  } else {
                    setVerifyIdentifier(false);
                  }
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className={
                  verifyPass === true
                    ? "input w-full input-bordered input-success"
                    : "input w-full input-bordered"
                }
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (ValidatePassword(event.target.value) != null) {
                    setVerifyPass(true);
                  } else {
                    setVerifyPass(false);
                  }
                }}
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
                disabled={verifyIdentifier && verifyPass ? false : true}
                onClick={async () => {
                  const response = await LoginButton(buttonArguments);
                  if (response.error) {
                    setUser(false);
                    setMod(false);
                    setAdmin(false);
                    setSuperAdmin(false);
                    setError(true);
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
              {error === true ? (
                <p className="text-center mt-5 text-red-600">
                  Login failed, please try again!
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
