import { atom } from "recoil";

function AdminAuthVerify() {
  let adminValue = localStorage.getItem("isAdmin");
  console.log(adminValue);
  return adminValue;
}

export const adminAuth = atom({
  key: "adminAuth", // unique ID (with respect to other atoms/selectors)
  default: AdminAuthVerify(), // default value (aka initial value)
});
