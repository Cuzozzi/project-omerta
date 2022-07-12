import axios from "axios";

function Logout() {
  console.log("works");
  let value = false;
  axios({
    method: "delete",
    url: "http://localhost:5433/authentication",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(function (response) {
    if (response.status === 200) {
      localStorage.removeItem("token");
      localStorage.setItem("isAdmin", "false");
      value = true;
    } else {
      value = false;
    }
  });
  return value;
}

export default Logout;
