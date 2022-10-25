import "../output.css";
import {
  AllUsers,
  AddUser,
  UserDelete,
  UserTokens,
  AllTokens,
  GiveMod,
  RemoveMod,
  GiveAdmin,
  RemoveAdmin,
} from "../helpers/AdminFunctions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authVerify0 } from "../atoms/authCheck";

function AdminConsole() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authVerify0);
  const [tableArray, changeTableArray] = useState<any[]>([]);
  const [dangerToggle, changeDangerToggle] = useState(true);
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  async function setUserTable() {
    changeTableArray((await AllUsers(navigate)) || []);
  }

  useEffect(() => {
    setUserTable();
  }, []);

  return (
    <div className="main-window flex flex-row overflow-x-auto">
      {/* USERS TABLE */}
      <table className="table mx-10 mt-10 h-fit">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Username</th>
            <th className="text-center">Email</th>
            <th className="text-center">Admin</th>
            <th className="text-center">Moderator</th>
            <th></th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((user) => (
            <tr key={user.id}>
              <td className="text-center">{user.id}</td>
              <td className="text-center">{user.username}</td>
              <td className="text-center">{user.email}</td>
              <td className=" text-center">
                {user.admin ? (
                  <button
                    className="tooltip"
                    data-tip="Toggle Admin"
                    onClick={() => {
                      RemoveAdmin(navigate, user.id, user.email);
                      changeTableArray(
                        tableArray.map((userchange) => {
                          if (userchange.id === user.id) {
                            userchange.admin = false;
                          }
                          return userchange;
                        })
                      );
                    }}
                  >
                    <i className="fa-regular fa-square-check"></i>
                  </button>
                ) : (
                  <button
                    className="tooltip"
                    data-tip="Toggle Admin"
                    onClick={() => {
                      console.log(user.id);
                      GiveAdmin(navigate, user.id, user.email);
                      changeTableArray(
                        tableArray.map((userchange) => {
                          if (userchange.id === user.id) {
                            userchange.admin = true;
                          }
                          return userchange;
                        })
                      );
                    }}
                  >
                    <i className="fa-regular fa-square"></i>
                  </button>
                )}
              </td>
              <td className=" text-center">
                {user.moderator ? (
                  <button
                    className="tooltip"
                    data-tip="Toggle Moderator"
                    onClick={() => {
                      RemoveMod(navigate, user.id, user.email);
                      changeTableArray(
                        tableArray.map((userchange) => {
                          if (userchange.id === user.id) {
                            userchange.moderator = false;
                          }
                          return userchange;
                        })
                      );
                    }}
                  >
                    <i className="fa-regular fa-square-check"></i>
                  </button>
                ) : (
                  <button
                    className="tooltip"
                    data-tip="Toggle Moderator"
                    onClick={() => {
                      GiveMod(navigate, user.id, user.email);
                      changeTableArray(
                        tableArray.map((userchange) => {
                          if (userchange.id === user.id) {
                            userchange.moderator = true;
                          }
                          return userchange;
                        })
                      );
                    }}
                  >
                    <i className="fa-regular fa-square"></i>
                  </button>
                )}
              </td>
              <td>
                <button
                  className="tooltip"
                  data-tip="Logout User"
                  onClick={async () => {
                    const response = await UserTokens(
                      navigate,
                      user.id,
                      user.email
                    );
                    if (response === "OK") {
                      console.log("Logged out!");
                    }
                  }}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </td>
              <td>
                <button
                  className="tooltip"
                  data-tip="Delete User"
                  onClick={async () => {
                    const response = await UserDelete(navigate, user.id);
                    if (response === "OK") {
                      const id = user.id;
                      changeTableArray(
                        tableArray.filter((tableArray) => tableArray.id !== id)
                      );
                    }
                  }}
                >
                  <i className="fa-solid fa-trash text-rose-500"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* DANGEROUS CONSOLE */}
      <div className="flex flex-col">
        <table className="table mx-auto my-10 h-fit w-full">
          <thead>
            <tr className="w-full text-center">
              <th>Dangerous Console</th>
              <th>
                <button
                  className="text-center tooltip"
                  data-tip="Toggle Console"
                  onClick={() => {
                    if (dangerToggle) {
                      changeDangerToggle(false);
                    } else {
                      changeDangerToggle(true);
                    }
                  }}
                >
                  {dangerToggle ? (
                    <i className="fa-solid fa-toggle-off"></i>
                  ) : (
                    <i className="fa-solid fa-toggle-on"></i>
                  )}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  className="text-center tooltip"
                  data-tip="Logout All Users"
                  disabled={dangerToggle}
                  onClick={() => {
                    AllTokens(navigate);
                    localStorage.setItem("isAdmin", "false");
                    localStorage.removeItem("token");
                    setAuth(false);
                    navigate("/login", { replace: true });
                  }}
                >
                  <i
                    className={
                      "fa-solid fa-arrow-right-from-bracket " +
                      (dangerToggle ? "text-gray-500" : "text-rose-500")
                    }
                  ></i>
                </button>
              </td>
              <td>
                <button
                  className="text-center tooltip"
                  data-tip="Delete All Users"
                  disabled={dangerToggle}
                >
                  <i
                    className={
                      "fa-solid fa-trash " +
                      (dangerToggle ? "text-gray-500" : "text-rose-500")
                    }
                  ></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* ADD USER CONSOLE */}
        <table className="table mx-auto mb-10 h-fit w-full">
          <thead>
            <tr className="text-center">
              <th>
                <button
                  className="tooltip"
                  data-tip="Add User"
                  onClick={async () => {
                    const response = await AddUser(
                      navigate,
                      emailValue,
                      passValue,
                      usernameValue
                    );
                    changeTableArray([...tableArray, response[0]]);
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </th>
              <th>Add User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Username</td>
              <td>
                <input
                  type="string"
                  className="input input-bordered"
                  onChange={(event) => {
                    setUsernameValue(event.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  className="input input-bordered"
                  onChange={(event) => {
                    setEmailValue(event.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  className="input input-bordered"
                  onChange={(event) => {
                    setPassValue(event.target.value);
                  }}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminConsole;
