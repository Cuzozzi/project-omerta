import "../output.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminConsole() {
  const navigate = useNavigate();
  return (
    <div className="main-window p-6">
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Input user details below!</h3>
          <div className="form-control mt-10">
            <input
              type="email"
              placeholder="info@site.com"
              className="input input-bordered"
              id="email"
            />
          </div>
          <div className="form-control mt-10">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              id="password"
            />
          </div>
          <div className="modal-action">
            <label
              for="my-modal-1"
              className="btn"
              onClick={() => {
                axios({
                  method: "post",
                  url: "http://localhost:5433/login_credentials",
                  data: {
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                  },
                }).then(function (response) {
                  console.log(response);
                  if (response.data === `works`) {
                    console.log("works");
                    document.getElementById("my-modal-1").checked = false;
                  } else {
                    console.log("doesn't work");
                  }
                });
              }}
            >
              Add User
            </label>
            <button
              className="btn"
              onClick={() => {
                console.log("boop");
                document.getElementById("my-modal-1").checked = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Input one or both user details below to delete!
          </h3>
          <div className="form-control mt-10">
            <input
              type="number"
              placeholder="User ID"
              className="input input-bordered"
              id="user-id"
            />
          </div>
          <div className="form-control mt-10">
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered"
              id="user-email"
            />
          </div>
          <div className="modal-action">
            <label
              for="my-modal-2"
              className="btn"
              onClick={() => {
                axios({
                  method: "delete",
                  url: "http://localhost:5433/admin-console-delete",
                  data: {
                    user_id: document.getElementById("user-id").value,
                    user_email: document.getElementById("user-email").value,
                    token: localStorage.getItem("token"),
                  },
                }).then(function (response) {
                  console.log(response);
                  if (
                    response.data === "User deleted by ID" ||
                    response.data === "User deleted by email"
                  ) {
                    console.log("User deleted");
                    document.getElementById("my-modal-2").checked = false;
                  } else {
                    console.log("Authentication failed");
                  }
                });
              }}
            >
              Delete User
            </label>
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my-modal-2").checked = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Input one or both user details below to delete tokens!
          </h3>
          <div className="form-control mt-10">
            <input
              type="number"
              placeholder="User ID"
              className="input input-bordered"
              id="user-tokens-id"
            />
          </div>
          <div className="form-control mt-10">
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered"
              id="user-tokens-email"
            />
          </div>
          <div className="modal-action">
            <label
              for="my-modal-3"
              className="btn"
              onClick={() => {
                axios({
                  method: "delete",
                  url: "http://localhost:5433/admin-console-delete-tokens",
                  data: {
                    user_id: document.getElementById("user-tokens-id").value,
                    user_email:
                      document.getElementById("user-tokens-email").value,
                    token: localStorage.getItem("token"),
                  },
                }).then(function (response) {
                  console.log(response);
                  if (
                    response.data === "User tokens deleted by ID" ||
                    response.data === "User tokens deleted by email"
                  ) {
                    console.log("User tokens deleted");
                    document.getElementById("my-modal-3").checked = false;
                  } else {
                    console.log("Authentication failed");
                  }
                });
              }}
            >
              Delete Tokens
            </label>
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my-modal-3").checked = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* 

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label for="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label for="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label for="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col m-10">
        <label for="my-modal-1" className="btn modal-button m-4">
          Add user
        </label>
        <label for="my-modal-2" className="btn modal-button m-4">
          Delete user
        </label>
        <label for="my-modal-3" className="btn modal-button m-4">
          Delete user's tokens
        </label>
        <label for="my-modal-4" className="btn modal-button m-4">
          Delete all tokens
        </label>
        <label for="my-modal-5" className="btn modal-button m-4">
          Give moderator to user
        </label>
        <label for="my-modal-6" className="btn modal-button m-4">
          Remove moderator to user
        </label>
      </div>
    </div>
  );
}

export default AdminConsole;
