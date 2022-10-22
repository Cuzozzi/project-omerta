import axios from "axios";

interface SingupButtonProps {
  password: string;
  email: string;
  username: string;
}

async function SingupButton({ password, email, username }: SingupButtonProps) {
  let value = undefined;
  await axios({
    method: "post",
    url: `${process.env.REACT_APP_SERVER_PORT}/api/signup`,
    data: {
      email: email,
      password: password,
      username: username,
    },
  }).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      console.log("Account created");
      console.log("Please remember to continue to the login page, thank you.");
      value = true;
    } else {
      console.log("Account creation failed");
      value = false;
    }
  });
  return value;
}

export default SingupButton;
