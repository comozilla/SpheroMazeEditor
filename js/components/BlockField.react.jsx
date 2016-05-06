import React from "react";
import ReactDOM from "react-dom";

import Appender from "./Appender.react";

export default class BlockField extends React.Component {

  render() {
    return (
      <ul id="block-field">
        <Appender />
        <Appender />
        <Appender />
        <Appender />
        <Appender />
        <Appender />
        <Appender />
        <Appender />
      </ul>
    );
  }
}
