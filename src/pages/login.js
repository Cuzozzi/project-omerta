import "../output.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const axios = require("axios");

function Login(props) {
  let navigate = useNavigate();
  // eslint-disable-next-line
  const [_, startRefresh] = useState(0);
  const refresh = () => {
    startRefresh({});
  };
  return (
    <div className="hero main-window bg-slate-90">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Welcome back! Login with your credentials, so you can get back to
            the action! Your family needs your help, capiche?
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="password"
                className="input input-bordered"
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
                className="btn btn-primary"
                onClick={() => {
                  console.log("boop-2");
                  axios({
                    method: "post",
                    url: "http://localhost:5433/authentication",
                    data: {
                      email: document.getElementById("login-email").value,
                      password: document.getElementById("login-password").value,
                    },
                  }).then(function (response) {
                    console.log(response);
                    if (response.data.response === "Authenticated") {
                      localStorage.setItem("token", response.data.token);
                      props.authCheck();
                      navigate("/", { replace: true });
                      refresh();
                    } else {
                      console.log("Wrong Password");
                    }
                  });
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
