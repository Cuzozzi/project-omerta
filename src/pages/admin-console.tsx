import "../output.css";
import AdminLabel from "../components/AdminLabel";
import AdminModal from "../components/AdminModal";
import {
  AllUsers,
  AddUser,
  DeleteUser,
  UserTokens,
  AllTokens,
  GiveMod,
  RemoveMod,
} from "../helpers/AdminFunctions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminConsole() {
  const navigate = useNavigate();
  const [tableValue, changeTableValue] = useState(false);
  const [tableArray, changeTableArray] = useState<any[]>([]);

  if (tableValue === true) {
    return (
      <div className="overflow-x-auto w-full">
        <table className="table mx-auto mt-10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Moderator</th>
            </tr>
          </thead>
          <tbody>
            {tableArray.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className=" text-center">
                  {user.admin ? (
                    <i className="fa-regular fa-circle-check"></i>
                  ) : (
                    <i className="fa-regular fa-circle-xmark"></i>
                  )}
                </td>
                <td className=" text-center">
                  {user.moderator ? (
                    <i className="fa-regular fa-circle-check"></i>
                  ) : (
                    <i className="fa-regular fa-circle-xmark"></i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn flex mx-auto mt-10"
          onClick={() => changeTableValue(false)}
        >
          Close
        </button>
      </div>
    );
  }
  return (
    <div className="main-window p-6">
      <AdminModal
        id="my-modal-1"
        title="Display all users below!"
        htmlFor="my-modal-1"
        button="Display all users"
        onClick1={async () => {
          changeTableArray((await AllUsers(navigate)) || []);
          changeTableValue(true);
        }}
        onClick2={() => {
          const element = document.getElementById(
            "my-modal-1"
          ) as HTMLInputElement;
          if (element) {
            element.checked = false;
          }
        }}
      />
      <AdminModal
        id="my-modal-2"
        title="Input user details below"
        htmlFor="my-modal-2"
        button="Add user"
        input
        inputTypeOne="email"
        inputTypeTwo="password"
        inputPlaceOne="info@site.com"
        inputPlaceTwo="password"
        onClick1={(inputValue1, inputValue2) =>
          AddUser(navigate, inputValue1, inputValue2)
        }
        onClick2={() => {
          const element = document.getElementById(
            "my-modal-2"
          ) as HTMLInputElement;
          if (element) {
            element.checked = false;
          }
        }}
      />
      <AdminModal
        id="my-modal-3"
        title="Input either field below to delete!"
        htmlFor="my-modal-3"
        button="Delete user"
        input
        inputTypeOne="number"
        inputTypeTwo="email"
        inputPlaceOne="User ID"
        inputPlaceTwo="User Email"
        onClick1={(inputValue1, inputValue2) =>
          DeleteUser(navigate, inputValue1, inputValue2)
        }
        onClick2={() => {
          const element = document.getElementById(
            "my-modal-3"
          ) as HTMLInputElement;
          if (element) {
            element.checked = false;
          }
        }}
      />
      <AdminModal
        id="my-modal-4"
        title="Input either field below to delete tokens!"
        htmlFor="my-modal-4"
        button="Delete tokens"
        input
        inputTypeOne="number"
        inputTypeTwo="email"
        inputPlaceOne="User ID"
        inputPlaceTwo="User Email"
        onClick1={(inputValue1, inputValue2) =>
          UserTokens(navigate, inputValue1, inputValue2)
        }
        onClick2={() => {
          const element = document.getElementById(
            "my-modal-4"
          ) as HTMLInputElement;
          if (element) {
            element.checked = false;
          }
        }}
      />
      <AdminModal
        id="my-modal-5"
        title="Delete all user tokens site-wide below!"
        htmlFor="my-modal-5"
        button="Delete all tokens"
        onClick1={() => AllTokens(navigate)}
        onClick2={() => {
          const element = document.getElementById(
            "my-modal-5"
          ) as HTMLInputElement;
          if (element) {
            element.checked = false;
          }
        }}
      />
      <AdminModal
        id="my-modal-6"
        title="Input either field below to give moderator!"
        htmlFor="my-modal-6"
        button="Give moderator"
        input
        inputTypeOne="number"
        inputTypeTwo="email"
        inputPlaceOne="User ID"
        inputPlaceTwo="User Email"
        onClick1={(inputValue1, inputValue2) =>
          GiveMod(navigate, inputValue1, inputValue2)
        }
        onClick2={() => {
          const element = document.getElementById(
            "my-modal-6"
          ) as HTMLInputElement;
          if (element) {
            element.checked = false;
          }
        }}
      />
      <AdminModal
        id="my-modal-7"
        title="Input either field below to remove moderator!"
        htmlFor="my-modal-7"
        button="Remove moderator"
        input
        inputTypeOne="number"
        inputTypeTwo="email"
        inputPlaceOne="User ID"
        inputPlaceTwo="User Email"
        onClick1={(inputValue1, inputValue2) =>
          RemoveMod(navigate, inputValue1, inputValue2)
        }
        onClick2={() => {
          const element = document.getElementById(
            "my-modal-7"
          ) as HTMLInputElement;
          if (element) {
            element.checked = false;
          }
        }}
      />

      <div className="flex flex-col m-10">
        <AdminLabel htmlFor="my-modal-1" text="All users" />
        <AdminLabel htmlFor="my-modal-2" text="Add user" />
        <AdminLabel htmlFor="my-modal-3" text="Delete user" />
        <AdminLabel htmlFor="my-modal-4" text="Delete user's tokens" />
        <AdminLabel htmlFor="my-modal-5" text="Delete all tokens" />
        <AdminLabel htmlFor="my-modal-6" text="Give moderator" />
        <AdminLabel htmlFor="my-modal-7" text="Remove moderator" />
      </div>
    </div>
  );
}

export default AdminConsole;
