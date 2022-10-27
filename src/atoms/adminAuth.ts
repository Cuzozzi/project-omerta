import axios from "axios";
import { atom, selector } from "recoil";

export async function AdminAuthVerify() {
  let value = false;

  try {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_PORT}/authentication/admin`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    value = true;
  } catch (err: any) {}
  console.log(value);
  return value;
}

const adminSelector = selector({
  key: "adminSelector",
  get: async ({}) => {
    return await AdminAuthVerify();
  },
});

export const adminAuth = atom({
  key: "adminAuth", // unique ID (with respect to other atoms/selectors)
  default: adminSelector, // default value (aka initial value)
});
