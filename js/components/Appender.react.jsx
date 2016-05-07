import React from "react";
import ReactDOM from "react-dom";

import BlockActions from "../actions/BlockActions";

export default class Appender extends React.Component {
  render() {
    return (
      <li className="appender" onClick={this._onClick}>
        <i className="fa fa-plus"></i>
      </li>
    );
  }
  _onClick() {
    BlockActions.append({
      blockName: "move",
      icon: "fa-arrows",
      color: "#8e44ad"
    });
  }
}
