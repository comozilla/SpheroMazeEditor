import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return (
      <span>Hello, World!</span>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById("app")
  );
});
