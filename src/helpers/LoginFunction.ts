import axios from "axios";

interface LoginButtonProps {
  email: string;
  password: string;
}

async function LoginButton({ email, password }: LoginButtonProps) {
  let value = false;
  await axios({
    method: "put",
    url: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/authentication`,
    data: {
      email: email,
      password: password,
    },
  }).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAdmin", response.data.admin);
      value = true;
    } else {
      console.log("Wrong Password");
      value = false;
    }
  });
  return value;
}

export default LoginButton;
