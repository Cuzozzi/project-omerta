import axios from "axios";
import { atom, selector } from "recoil";

export async function ModVerify() {
  let value = false;

  try {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_PORT}/authentication/moderator`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    value = true;
  } catch (err: any) {
    if (err.response.status === 401) {
      value = false;
    }
  }
  console.log(value);
  return value;
}

const modSelector = selector({
  key: "modSelector",
  get: async ({}) => {
    return await ModVerify();
  },
});

export const modAuth = atom({
  key: "modAuth", // unique ID (with respect to other atoms/selectors)
  default: modSelector, // default value (aka initial value)
});
