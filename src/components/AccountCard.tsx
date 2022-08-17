import { useState } from "react";

function AccountCard({
  action_title,
  description,
  inputTypeOne,
  inputTypeTwo,
  inputPlaceOne,
  inputPlaceTwo,
  button,
  onClick1,
}: {
  action_title: string;
  description: string;
  inputTypeOne: string;
  inputTypeTwo: string;
  inputPlaceOne: string;
  inputPlaceTwo: string;
  button: string;
  onClick1: (inputValue1: string, inputValue2: string) => void;
}) {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  return (
    <div className="card w-auto mx-8 mb-8 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{action_title}</h2>
        <p>{description}</p>
        <div className="form-control mt-5">
          <input
            type={inputTypeOne}
            placeholder={inputPlaceOne}
            className="input input-bordered"
            onChange={(event) => setInputValue1(event.target.value)}
            id="input1"
            tabIndex={-1}
          />
        </div>
        <div className="form-control my-5">
          <input
            type={inputTypeTwo}
            placeholder={inputPlaceTwo}
            className="input input-bordered"
            onChange={(event) => setInputValue2(event.target.value)}
            id="input2"
            tabIndex={-1}
          />
        </div>
        <div className="card-actions">
          <button
            className="btn"
            onClick={() => onClick1(inputValue1, inputValue2)}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
