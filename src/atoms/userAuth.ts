import axios from "axios";
import { atom, selector } from "recoil";

export async function UserAuthVerify() {
  let value = false;

  try {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_PORT}/authentication/user`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    value = true;
  } catch (err: any) {}
  console.log(value);
  return value;
}

const authSelector = selector({
  key: "authSelector",
  get: async ({}) => {
    return await UserAuthVerify();
  },
});

export const userAuth = atom({
  key: "userAuth", // unique ID (with respect to other atoms/selectors)
  default: authSelector, // default value (aka initial value)
});
