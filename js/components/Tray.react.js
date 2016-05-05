import React from "react";
import ReactDOM from "react-dom";

import TrayItem from "./TrayItem.react";

export default class Tray extends React.Component {

  render() {
    return (
      <ul id="tray">
        <TrayItem itemColor="orange" />
      </ul>
    );
  }
}
