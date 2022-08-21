import axios from "axios";
import { useState, useEffect } from "react";
import Gravatar from "react-gravatar";
import AccountCard, { Message } from "../components/AccountCard";

export interface User {
  user_id: number;
  username: string;
  email: string;
  tilepower: number;
}

export async function GetInfo() {
  let info: User[] = [];
  await axios({
    method: "get",
    url: "http://localhost:5433/account/info",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      console.log(response);
      info = response.data;
    })
    .catch(function (err) {
      console.log(err);
      return err;
    });
  return info;
}

export function AccountContent() {
  const md5 = require("blueimp-md5");

  const [result, setResult] = useState<User>();
  const [hash, setHash] = useState(md5(404));
  const [usernameMessage, usernameSetMessage] = useState<Message>({
    type: "success",
    content: "",
    isVisible: false,
  });
  const [emailMessage, emailSetMessage] = useState<Message>({
    type: "success",
    content: "",
    isVisible: false,
  });
  const [passwordMessage, passwordSetMessage] = useState<Message>({
    type: "success",
    content: "",
    isVisible: false,
  });

  useEffect(() => {
    const asyncCall = async () => {
      const data = await GetInfo();
      setHash(data.length > 0 ? md5(data[0].email) : md5(404));
      setResult(data[0] as User);
    };
    asyncCall();
  }, [md5]);

  return (
    <div className="main-window">
      <div className="flex justify-center my-8">
        <Gravatar
          className="mask mask-circle"
          md5={hash}
          size={150}
          default="identicon"
        />
      </div>
      <div className="overflow-x-auto mx-8 mb-8">
        <table className="table w-full">
          <thead className="text-center">
            <tr>
              <th className="bg-slate-800">Details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="bg-slate-800">Username:</td>
              <td className="bg-slate-800">
                {result ? result.username : "404"}
              </td>
            </tr>
            <tr>
              <td className="bg-slate-800">Email: </td>
              <td className="bg-slate-800">{result ? result.email : "404"}</td>
            </tr>
            <tr>
              <td className="bg-slate-800">Tilepower:</td>
              <td className="bg-slate-800">
                {result ? result.tilepower : "404"}
              </td>
            </tr>
            <tr>
              <td className="bg-slate-800">Account ID:</td>
              <td className="bg-slate-800">
                {result ? result.user_id : "404"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AccountCard
        action_title="Change Username"
        description="Enter the details below to change your username!"
        inputTypeOne="text"
        inputTypeTwo="password"
        inputPlaceOne="New Username"
        inputPlaceTwo="Enter Password"
        button="Change Username"
        message={usernameMessage}
        onClick1={(inputValue1, inputValue2) => {
          ChangeUsername(inputValue1, inputValue2).then(function (response) {
            if (response === inputValue1 && result) {
              setResult({ ...result, username: inputValue1 });
              const newMessage = {
                type: "success",
                content: "Username succesfully changed!",
                isVisible: true,
              } as Message;
              usernameSetMessage(newMessage);
              setTimeout(() => {
                usernameSetMessage({
                  ...newMessage,
                  isVisible: false,
                });
              }, 6000);
            } else {
              const newMessage = {
                type: "error",
                content: "Failed to change username!",
                isVisible: true,
              } as Message;
              usernameSetMessage(newMessage);
              setTimeout(() => {
                usernameSetMessage({
                  ...newMessage,
                  isVisible: false,
                });
              }, 6000);
            }
          });
        }}
      />
      <AccountCard
        action_title="Change Email"
        description="Enter the details below to change your email!"
        inputTypeOne="email"
        inputTypeTwo="password"
        inputPlaceOne="New Email"
        inputPlaceTwo="Enter Password"
        button="Change Email"
        message={emailMessage}
        onClick1={(inputValue1, inputValue2) => {
          ChangeEmail(inputValue1, inputValue2).then(function (response) {
            if (response === inputValue1 && result) {
              setResult({ ...result, email: inputValue1 });
              const newMessage = {
                type: "success",
                content: "Email succesfully changed!",
                isVisible: true,
              } as Message;
              emailSetMessage(newMessage);
              setTimeout(() => {
                emailSetMessage({
                  ...newMessage,
                  isVisible: false,
                });
              }, 6000);
            } else {
              const newMessage = {
                type: "error",
                content: "Failed to change email!",
                isVisible: true,
              } as Message;
              emailSetMessage(newMessage);
              setTimeout(() => {
                emailSetMessage({
                  ...newMessage,
                  isVisible: false,
                });
              }, 6000);
            }
          });
        }}
      />
      <AccountCard
        action_title="Change Password"
        description="Enter the details below to change your password!"
        inputTypeOne="password"
        inputTypeTwo="password"
        inputPlaceOne="New Password"
        inputPlaceTwo="Old Password"
        button="Change Password"
        message={passwordMessage}
        onClick1={(inputValue1, inputValue2) => {
          ChangePassword(inputValue1, inputValue2).then(function (response) {
            if (response === inputValue1 && result) {
              setResult({ ...result, username: inputValue1 });
              const newMessage = {
                type: "success",
                content: "Password succesfully changed!",
                isVisible: true,
              } as Message;
              passwordSetMessage(newMessage);
              setTimeout(() => {
                passwordSetMessage({
                  ...newMessage,
                  isVisible: false,
                });
              }, 6000);
            } else {
              const newMessage = {
                type: "error",
                content: "Failed to change password!",
                isVisible: true,
              } as Message;
              passwordSetMessage(newMessage);
              setTimeout(() => {
                passwordSetMessage({
                  ...newMessage,
                  isVisible: false,
                });
              }, 6000);
            }
          });
        }}
      />
    </div>
  );
}

export async function ChangeUsername(inputValue1: string, inputValue2: string) {
  let message = "";
  await axios({
    method: "put",
    url: "http://localhost:5433/account/change-username",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      username: inputValue1,
      password: inputValue2,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        message = inputValue1;
      }
    })
    .catch(function (err) {
      console.log(err);
      return err;
    });
  return message;
}

export async function ChangeEmail(inputValue1: string, inputValue2: string) {
  let message = "";
  await axios({
    method: "put",
    url: "http://localhost:5433/account/change-email",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      email: inputValue1,
      password: inputValue2,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        message = inputValue1;
      }
    })
    .catch(function (err) {
      console.log(err);
      return err;
    });
  return message;
}

export async function ChangePassword(inputValue1: string, inputValue2: string) {
  let message = "";
  await axios({
    method: "put",
    url: "http://localhost:5433/account/change-password",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      newpassword: inputValue1,
      password: inputValue2,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        message = inputValue1;
      }
    })
    .catch(function (err) {
      console.log(err);
      return err;
    });
  return message;
}
