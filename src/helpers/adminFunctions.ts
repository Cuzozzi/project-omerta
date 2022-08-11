import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import Logout from "./LogoutFunction";

export function AllUsers(navigate: NavigateFunction) {
  axios({
    method: "get",
    url: "http://localhost:5433/admin/console/user",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        console.log("Users sent");
      }
    })
    .catch(function (err) {
      if (err.response.status === 401) {
        console.log("Authentication failed");
        localStorage.setItem("isAdmin", "false");
        navigate("/", { replace: true });
      }
    });
}

export function AddUser(
  navigate: NavigateFunction,
  inputValue1: string,
  inputValue2: string
) {
  const element = document.getElementById("my-modal-2") as HTMLInputElement;
  axios({
    method: "post",
    url: "http://localhost:5433/admin/console/user",
    data: {
      email: inputValue1,
      password: inputValue2,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        console.log("User added");
        element.checked = false;
      }
    })
    .catch(function (err) {
      if (err.response.status === 401) {
        Logout();
      }
    });
}

export function DeleteUser(
  navigate: NavigateFunction,
  inputValue1: string,
  inputValue2: string
) {
  const element = document.getElementById("my-modal-3") as HTMLInputElement;
  axios({
    method: "delete",
    url: "http://localhost:5433/admin/console/user",
    data: {
      user_id: inputValue1,
      user_email: inputValue2,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        console.log("User deleted");
        element.checked = false;
      }
    })
    .catch(function (err) {
      if (err.response.status === 401) {
        console.log("Authentication failed");
        localStorage.setItem("isAdmin", "false");
        navigate("/", { replace: true });
      }
    });
}

export function UserTokens(
  navigate: NavigateFunction,
  inputValue1: string,
  inputValue2: string
) {
  const element = document.getElementById("my-modal-4") as HTMLInputElement;
  axios({
    method: "put",
    url: "http://localhost:5433/admin/console/tokens",
    data: {
      user_id: inputValue1,
      user_email: inputValue2,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        console.log("User tokens deleted");
        element.checked = false;
      }
    })
    .catch(function (err) {
      if (err.response.status === 401) {
        console.log("Authentication failed");
        localStorage.setItem("isAdmin", "false");
        navigate("/", { replace: true });
      }
    });
}

export function AllTokens(navigate: NavigateFunction) {
  const element = document.getElementById("my-modal-5") as HTMLInputElement;
  axios({
    method: "delete",
    url: "http://localhost:5433/admin/console/tokens",
    data: {
      token: localStorage.getItem("token"),
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        console.log("All session tokens deleted sitewide");
        element.checked = false;
      }
    })
    .catch(function (err) {
      if (err.response.status === 401) {
        console.log("Authentication failed");
        localStorage.setItem("isAdmin", "false");
        navigate("/", { replace: true });
      }
    });
}

export function GiveMod(
  navigate: NavigateFunction,
  inputValue1: string,
  inputValue2: string
) {
  const element = document.getElementById("my-modal-2") as HTMLInputElement;
  axios({
    method: "put",
    url: "http://localhost:5433/admin/console/moderator",
    data: {
      user_id: inputValue1,
      user_email: inputValue2,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        console.log("User granted moderator");
        element.checked = false;
      }
    })
    .catch(function (err) {
      if (err.response.status === 401) {
        console.log("Authentication failed");
        localStorage.setItem("isAdmin", "false");
        navigate("/", { replace: true });
      }
    });
}

export function RemoveMod(
  navigate: NavigateFunction,
  inputValue1: string,
  inputValue2: string
) {
  const element = document.getElementById("my-modal-2") as HTMLInputElement;
  axios({
    method: "delete",
    url: "http://localhost:5433/admin/console/moderator",
    data: {
      user_id: inputValue1,
      user_email: inputValue2,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        console.log("User revoked moderator");
        element.checked = false;
      }
    })
    .catch(function (err) {
      if (err.response.status === 401) {
        console.log("Authentication failed");
        localStorage.setItem("isAdmin", "false");
        navigate("/", { replace: true });
      }
    });
}
