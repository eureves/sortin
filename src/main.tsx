import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AlgorithmContextProvider } from "./state/Algorithm/Provider";
import { ArrayContextProvider } from "./state/Array/Provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ArrayContextProvider>
    <AlgorithmContextProvider>
      <App />
    </AlgorithmContextProvider>
  </ArrayContextProvider>
  // </React.StrictMode>
);
