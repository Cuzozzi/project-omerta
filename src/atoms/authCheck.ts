import axios from "axios";
import { atom } from "recoil";
import { setRecoil } from "recoil-nexus";

export async function AuthVerify() {
  let token = String(localStorage.getItem("token"));
  console.log(token);
  await axios({
    method: "get",
    url: "http://localhost:5433/authentication",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        setRecoil(authVerify0, true);
      }
    })
    .catch(function (err) {
      console.log(err);
      if (err.response.status === 401) {
        setRecoil(authVerify0, false);
      }
    });
}

export const authVerify0 = atom({
  key: "authVerify0", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
