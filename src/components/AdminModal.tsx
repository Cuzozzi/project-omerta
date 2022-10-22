import { useState } from "react";

interface AdModalProps {
  id: string;
  title: string;
  htmlFor: string;
  button: string;
  input?: boolean;
  userinput?: boolean;
  inputTypeOne?: string;
  inputTypeTwo?: string;
  inputPlaceOne?: string;
  inputPlaceTwo?: string;
  onClick1: (
    inputValue1: string,
    inputValue2: string,
    inputValue3: string
  ) => void;
  onClick2: () => void;
}

function AdminModal({
  id,
  title,
  htmlFor,
  button,
  onClick1,
  onClick2,
  input,
  userinput,
  inputTypeOne,
  inputTypeTwo,
  inputPlaceOne,
  inputPlaceTwo,
}: AdModalProps) {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle bg-slate-800">
        <div className="modal-box bg-slate-700">
          <h3 className="font-bold text-lg">{title}</h3>
          {input && (
            <div className="form-control mt-10">
              <input
                type={inputTypeOne}
                placeholder={inputPlaceOne}
                className="input input-bordered"
                onChange={(event) => setInputValue1(event.target.value)}
                id="input1"
              />
            </div>
          )}
          {input && (
            <div className="form-control mt-10">
              <input
                type={inputTypeTwo}
                placeholder={inputPlaceTwo}
                className="input input-bordered"
                onChange={(event) => setInputValue2(event.target.value)}
                id="input2"
              />
            </div>
          )}
          {userinput && (
            <div className="form-control mt-10">
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                onChange={(event) => setInputValue3(event.target.value)}
                id="input3"
              />
            </div>
          )}
          <div className="modal-action">
            <label
              htmlFor={htmlFor}
              className="btn"
              onClick={() => onClick1(inputValue1, inputValue2, inputValue3)}
            >
              {button}
            </label>
            <button className="btn" onClick={onClick2}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminModal;
