import axios from "axios";
import { atom, selector } from "recoil";

export async function SuperAdminAuthVerify() {
  let value = false;

  try {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_PORT}/authentication/super-admin`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    value = true;
  } catch (err: any) {}
  console.log(value);
  return value;
}

const superAdminSelector = selector({
  key: "superAdminSelector",
  get: async ({}) => {
    return await SuperAdminAuthVerify();
  },
});

export const superAdminAuth = atom({
  key: "superAdminAuth", // unique ID (with respect to other atoms/selectors)
  default: superAdminSelector, // default value (aka initial value)
});
