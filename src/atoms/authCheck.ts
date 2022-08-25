import axios from "axios";
import { atom } from "recoil";

export async function AuthVerify() {
  let token = String(localStorage.getItem("token"));
  let value = false;
  console.log(token);

  await axios({
    method: "get",
    url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/authentication`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        value = true;
      }
    })
    .catch(function (err) {
      console.log(err);
      if (err.response.status === 401) {
        value = false;
      }
    });
  return value;
}

export const authVerify0 = atom({
  key: "authVerify0", // unique ID (with respect to other atoms/selectors)
  default: AuthVerify(), // default value (aka initial value)
});
