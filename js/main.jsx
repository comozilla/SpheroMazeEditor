import React from "react";
import ReactDOM from "react-dom";

import "../css/style.css";
import "font-awesome";

import BlockField from "./components/BlockField.react.jsx";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <BlockField />,
    document.getElementById("app")
  );
});
