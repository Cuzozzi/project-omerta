import "../output.css";

const axios = require("axios");

function Account() {
  return (
    <main>
      <h2>Account</h2>
      <button
        onClick={() => {
          console.log("boop");
          axios({
            method: "post",
            url: "http://localhost:5433/user",
            data: {
              firstName: "Fred",
              secondName: "Flintstone",
            },
          });
        }}
      >
        Add User
      </button>
      <p>Placeholder</p>
    </main>
  );
}

export default Account;
