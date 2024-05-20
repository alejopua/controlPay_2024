import React from "react";
import ReactDOM from "react-dom/client";
import { ControlPayApp } from "./ControlPayApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ControlPayApp />
    </BrowserRouter>
  </React.StrictMode>
);
