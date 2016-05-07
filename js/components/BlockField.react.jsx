import React from "react";

import BlockStore from "../stores/BlockStore";
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
