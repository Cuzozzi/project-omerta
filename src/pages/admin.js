import "../output.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  function adminAuthCheck() {
    let admin = false;
    axios({
      method: "post",
      url: "http://localhost:5433/admin_authentication",
      data: {
        email: document.getElementById("login-email").value,
        password: document.getElementById("login-password").value,
      },
    }).then(function (response) {
      if (response.data.response === "Admin authenticated") {
        navigate("/admin-console", { replace: true });
        refresh();
      } else {
        navigate("/admin", { replace: true });
        refresh();
      }
    });
    if ((admin = true)) {
      return true;
    } else {
      return false;
    }
  }
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
            Welcome back! Login with your admin credentials, so you can get back
            to the console! Try not to break the game.
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
              <button className="btn btn-primary" onClick={adminAuthCheck}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
