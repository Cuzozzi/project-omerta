import axios from "axios";

function Logout() {
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_SERVER_PORT}/authentication`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      localStorage.removeItem("token");
      localStorage.setItem("isAdmin", "false");
      window.location.replace("/login");
    })
    .catch((err) => console.error(err));
}

export default Logout;
