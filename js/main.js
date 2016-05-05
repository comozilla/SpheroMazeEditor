import React from "react";
import ReactDOM from "react-dom";

import "../css/style.css";

import Tray from "./components/Tray.react";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Tray />,
    document.getElementById("app")
  );
});
