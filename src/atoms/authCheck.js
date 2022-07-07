import axios from "axios";
import { atom, selector } from "recoil";

async function AuthVerify() {
  let authValue = false;
  let token = String(localStorage.getItem("token"));
  console.log(token);
  await axios({
    method: "post",
    url: "http://localhost:5433/authentication_time_check",
    data: {
      token: token,
    },
  }).then(function (response) {
    console.log(response.data.response);
    if (response.data.response === "Token invalid") {
      localStorage.removeItem("token");
      authValue = false;
    } else {
      authValue = true;
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
