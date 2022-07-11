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
} from "../helpers/adminFunctions";
import { useNavigate } from "react-router-dom";

function AdminConsole() {
  const navigate = useNavigate();
  return (
    <div className="main-window p-6">
      <AdminModal
        id="my-modal-1"
        title="Display all users below!"
        htmlFor="my-modal-1"
        button="Display all users"
        onClick1={(inputValue1, inputValue2) =>
          AllUsers(navigate, inputValue1, inputValue2)
        }
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
        onClick1={(inputValue1, inputValue2) =>
          AllTokens(navigate, inputValue1, inputValue2)
        }
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
