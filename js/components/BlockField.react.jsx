import React from "react";

import BlockStore from "../stores/BlockStore";
import Block from "./Block.react.jsx";
import Appender from "./Appender.react.jsx";

function getBlockState() {
  return {
    blocks: BlockStore.getAll()
  };
}
export default class BlockField extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = getBlockState();
  }
  componentDidMount() {
    BlockStore.addChangeListener(this._onChange.bind(this));
  }
  componentWillUnmount() {
    BlockStore.removeChangeListener(this._onChange.bind(this));
  }
  render() {
    let blocks = [];
    this.state.blocks.forEach(blockDetail => {
      blocks.push(
        <Block
          itemColor={blockDetail.color}
          icon={blockDetail.icon}
        />
      );
    });

    return (
      <ul id="block-field">
        {blocks}
        <Appender />
      </ul>
    );
  }
  _onChange() {
    this.setState(getBlockState());
  }
}
