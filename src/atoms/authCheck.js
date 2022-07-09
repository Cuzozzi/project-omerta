import axios from "axios";
import { atom } from "recoil";

async function AuthVerify() {
  let authValue = false;
  let token = String(localStorage.getItem("token"));
  console.log(token);
  await axios({
    method: "get",
    url: "http://localhost:5433/authentication_time_check",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        authValue = true;
      }
    })
    .catch(function (err) {
      console.log(err);
      if (err.response.status === 401) {
        authValue = false;
      }
    });
  if (authValue) {
    return true;
  } else {
    return false;
  }
}

export const authVerify0 = atom({
  key: "authVerify0", // unique ID (with respect to other atoms/selectors)
  default: AuthVerify(), // default value (aka initial value)
});
