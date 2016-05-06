import React from "react";
import ReactDOM from "react-dom";

var a = "";

import "../css/style.css";
import "font-awesome";

import BlockField from "./components/BlockField.react";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <BlockField />,
    document.getElementById("app")
  );
});
