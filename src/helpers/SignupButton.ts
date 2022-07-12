import axios from "axios";

interface SingupButtonProps {
  password: string;
  email: string;
}

function SingupButton({ password, email }: SingupButtonProps) {
  axios({
    method: "post",
    url: "http://localhost:5433/login_credentials",
    data: {
      email: email,
      password: password,
    },
  }).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      console.log("Account created");
      //navigate("/signup-2", { replace: true });
    } else {
      console.log("Account creation failed");
    }
  });
}

export default SingupButton;
