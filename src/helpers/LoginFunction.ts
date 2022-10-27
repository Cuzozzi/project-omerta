import axios from "axios";

interface LoginFunctionProps {
  identifier: string;
  password: string;
}

interface response {
  token: string;
  super_admin: boolean;
  admin: boolean;
  moderator: boolean;
  error: boolean;
}

async function LoginFunction({ identifier, password }: LoginFunctionProps) {
  let value: response;
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/api/login`,
      data: {
        identifier,
        password,
      },
    });
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    value = response.data;
    value.error = false;
  } catch (err: any) {
    console.log(err.response.data);
    value = err.response.data;
    value.error = true;
  }
  return value;
}

export default LoginFunction;
