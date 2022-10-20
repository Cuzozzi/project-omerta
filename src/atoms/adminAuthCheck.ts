import { atom } from "recoil";

function AdminAuthVerify() {
  let adminValue = localStorage.getItem("isAdmin");
  if (adminValue === "true") {
    return true;
  } else {
    return false;
  }
}

export const adminAuth = atom({
  key: "adminAuth", // unique ID (with respect to other atoms/selectors)
  default: AdminAuthVerify(), // default value (aka initial value)
});
