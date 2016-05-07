import React from "react";

import Appender from "./Appender.react.jsx";

export default class BlockField extends React.Component {

  render() {
    return (
      <ul id="block-field">
        <Appender />
      </ul>
    );
  }
}
