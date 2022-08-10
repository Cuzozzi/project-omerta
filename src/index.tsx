import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
