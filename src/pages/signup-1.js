import "../output.css";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Signup1() {
  //let navigate = useNavigate();
  return (
    <main className="main-window-2 flex justify-center items-center main-window flex-col">
      <div className="mb-10">
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
              Sign up below to create your account, we just need an email and
              passowrd! Then we can move to the next step!
            </p>
            <div className="form-control mb-10">
              <input
                type="email"
                placeholder="info@site.com"
                className="input input-bordered"
                id="email"
              />
            </div>
            <div className="form-control mb-10">
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                id="password"
              />
            </div>
            <Link
              to="/signup-1"
              className="btn btn-primary"
              onClick={() => {
                console.log("boop-2");
                const password = document.getElementById("password").value;
                axios({
                  method: "post",
                  url: "http://localhost:5433/login_credentials",
                  data: {
                    email: document.getElementById("email").value,
                    password: password,
                  },
                }).then(function (response) {
                  console.log(response);
                  if (response.data === `works`) {
                    console.log("works");
                    //navigate("/signup-2", { replace: true });
                  } else {
                    console.log("doesn't work");
                  }
                });
              }}
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
