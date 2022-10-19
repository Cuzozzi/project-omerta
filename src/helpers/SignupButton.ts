import axios from "axios";

interface SingupButtonProps {
  password: string;
  email: string;
}

function SingupButton({ password, email }: SingupButtonProps) {
  axios({
    method: "post",
    url: `${process.env.REACT_APP_SERVER_PORT}/login_credentials`,
    data: {
      email: email,
      password: password,
    },
  }).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      console.log("Account created");
      console.log("Please remember to continue to the login page, thank you.")
      //navigate("/signup-2", { replace: true });
    } else {
      console.log("Account creation failed");
    }
  });
}

export default SingupButton;
