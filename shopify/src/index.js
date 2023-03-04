import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Favicon from "react-favicon";
import image from "../src/images/icon.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Favicon url={image} />
    <App />
  </>
);
