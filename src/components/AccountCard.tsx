import { useState } from "react";

export interface Message {
  type: "success" | "error";
  content: string;
  isVisible: boolean;
}

function AccountCard({
  action_title,
  description,
  inputTypeOne,
  inputTypeTwo,
  inputPlaceOne,
  inputPlaceTwo,
  button,
  onClick1,
  message,
}: {
  action_title: string;
  description: string;
  inputTypeOne: string;
  inputTypeTwo: string;
  inputPlaceOne: string;
  inputPlaceTwo: string;
  button: string;
  onClick1: (inputValue1: string, inputValue2: string) => void;
  message: Message;
}) {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setInputValue1("");
    setInputValue2("");
  };

  return (
    <div className="card w-auto mx-8 mb-8 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{action_title}</h2>
        <p>{description}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-control mt-5">
            <input
              type={inputTypeOne}
              placeholder={inputPlaceOne}
              className="input input-bordered"
              value={inputValue1}
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
              value={inputValue2}
              onChange={(event) => setInputValue2(event.target.value)}
              id="input2"
              tabIndex={-1}
            />
          </div>
          <button
            type="submit"
            className="btn"
            onClick={() => onClick1(inputValue1, inputValue2)}
          >
            {button}
          </button>
        </form>
        <>
          <div
            className={[
              "alert border-2 w-80 fixed shadow-lg",
              message.type === "success"
                ? "alert-success border-emerald-600"
                : "alert-error border-rose-600",
              message.isVisible ? "message-transition" : "",
            ].join(" ")}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    message.type === "success"
                      ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  }
                />
              </svg>
              <span>{message.content}</span>
            </div>
          </div>
        </>
        <div className="card-actions"></div>
      </div>
    </div>
  );
}

export default AccountCard;
