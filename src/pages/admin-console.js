import "../output.css";
import axios from "axios";

function AdminConsole() {
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
              htmlFor="my-modal-1"
              className="btn"
              onClick={() => {
                axios({
                  method: "post",
                  url: "http://localhost:5433/admin-console-add",
                  data: {
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    token: localStorage.getItem("token"),
                  },
                }).then(function (response) {
                  console.log(response);
                  if (response.status === 200) {
                    console.log("User added");
                    document.getElementById("my-modal-1").checked = false;
                  } else {
                    console.log("Authentication failed");
                  }
                });
              }}
            >
              Add User
            </label>
            <button
              className="btn"
              onClick={() => {
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
              htmlFor="my-modal-2"
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
                  if (response.status === 200) {
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
              htmlFor="my-modal-3"
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
                  if (response.status === 200) {
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

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Delete all user tokens site-wide below!
          </h3>
          <p className="py-4">
            Are you sure you want to do this? Don't click this unless absolutely
            necessary!
          </p>
          <img src="images/warning.jpg" alt="" className="" />
          <div className="modal-action">
            <label
              htmlFor="my-modal-4"
              className="btn btn-error"
              onClick={() => {
                axios({
                  method: "delete",
                  url: "http://localhost:5433/admin-console-delete-all-tokens",
                  data: {
                    token: localStorage.getItem("token"),
                  },
                }).then(function (response) {
                  if (response.status === 200) {
                    console.log("All session tokens deleted sitewide");
                    document.getElementById("my-modal-4").checked = false;
                  } else {
                    console.log("Authentication failed");
                  }
                });
              }}
            >
              Delete all tokens
            </label>
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my-modal-4").checked = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Give moderator to user by ID or email
          </h3>
          <div className="form-control mt-10">
            <input
              type="number"
              placeholder="User ID"
              className="input input-bordered"
              id="user-moderator-id"
            />
          </div>
          <div className="form-control mt-10">
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered"
              id="user-moderator-email"
            />
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-5"
              className="btn"
              onClick={() => {
                axios({
                  method: "put",
                  url: "http://localhost:5433/admin-console-give-moderator",
                  data: {
                    user_id: document.getElementById("user-moderator-id").value,
                    user_email: document.getElementById("user-moderator-email")
                      .value,
                    token: localStorage.getItem("token"),
                  },
                }).then(function (response) {
                  if (response.status === 200) {
                    console.log("User granted moderator");
                    document.getElementById("my-modal-5").checked = false;
                  } else {
                    console.log("Authentication failed");
                  }
                });
              }}
            >
              Give moderator to user
            </label>
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my-modal-5").checked = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Remove moderator to user by ID or email
          </h3>
          <div className="form-control mt-10">
            <input
              type="number"
              placeholder="User ID"
              className="input input-bordered"
              id="user-remove-moderator-id"
            />
          </div>
          <div className="form-control mt-10">
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered"
              id="user-remove-moderator-email"
            />
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn"
              onClick={() => {
                axios({
                  method: "put",
                  url: "http://localhost:5433/admin-console-remove-moderator",
                  data: {
                    user_id: document.getElementById("user-remove-moderator-id")
                      .value,
                    user_email: document.getElementById(
                      "user-remove-moderator-email"
                    ).value,
                    token: localStorage.getItem("token"),
                  },
                }).then(function (response) {
                  if (response.status === 200) {
                    console.log("User revoked moderator");
                    document.getElementById("my-modal-6").checked = false;
                  } else {
                    console.log("Authentication failed");
                  }
                });
              }}
            >
              Remove moderator from user
            </label>
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my-modal-6").checked = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Display all users below!</h3>
          <div className="modal-action">
            <label
              htmlFor="my-modal-7"
              className="btn"
              onClick={() => {
                axios({
                  method: "post",
                  url: "http://localhost:5433/admin-console-all-users",
                  data: {
                    token: localStorage.getItem("token"),
                  },
                }).then(function (response) {
                  if (response.status === 200) {
                    console.log("Users sent");
                    console.log(response.data);
                  } else {
                    console.log("Authentication failed");
                  }
                });
              }}
            >
              List all users
            </label>
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my-modal-7").checked = false;
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col m-10">
        <label htmlFor="my-modal-7" className="btn modal-button m-4">
          All users
        </label>
        <label htmlFor="my-modal-1" className="btn modal-button m-4">
          Add user
        </label>
        <label htmlFor="my-modal-2" className="btn modal-button m-4">
          Delete user
        </label>
        <label htmlFor="my-modal-3" className="btn modal-button m-4">
          Delete user's tokens
        </label>
        <label htmlFor="my-modal-4" className="btn modal-button m-4">
          Delete all tokens
        </label>
        <label htmlFor="my-modal-5" className="btn modal-button m-4">
          Give moderator to user
        </label>
        <label htmlFor="my-modal-6" className="btn modal-button m-4">
          Remove moderator from user
        </label>
      </div>
    </div>
  );
}

export default AdminConsole;
