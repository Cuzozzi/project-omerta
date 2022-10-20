import axios from "axios";
//import { useNavigate } from "react-router-dom";

interface SingupButtonProps {
  password: string;
  email: string;
  username: string;
}

function SingupButton({ password, email, username }: SingupButtonProps) {
  //const navigate = useNavigate();
  console.log(password, email, username);
  axios({
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
      //navigate("/", { replace: true });
    } else {
      console.log("Account creation failed");
    }
  });
}

export default SingupButton;
