import axios from "axios";
import { atom } from "recoil";

function AdminAuthVerify() {
  let authValue = false;
  let token = String(localStorage.getItem("token"));
  console.log(token);
  axios({
    method: "post",
    url: "http://localhost:5433/admin_authentication",
    data: {
      token: localStorage.getItem("token"),
    },
  }).then(function (response) {
    if (response.data.response === "Admin authenticated") {
      authValue = true;
    } else {
      authValue = false;
    }
  });
  if (authValue) {
    return true;
  } else {
    return false;
  }
}

export const adminAuth = atom({
  key: "adminAuth", // unique ID (with respect to other atoms/selectors)
  default: AdminAuthVerify(), // default value (aka initial value)
});
