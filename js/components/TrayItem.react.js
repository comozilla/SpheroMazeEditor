import React from "react";
import ReactDOM from "react-dom";

export default class TrayItem extends React.Component {
  constructor(props) {
    super(props);
  }
  static get propTypes() { return { itemColor: React.PropTypes.string.isRequired }; }
  render() {
    var itemColor = this.props.itemColor;
    return (
      <li style={{backgroundColor: itemColor}} />
    );
  }
}
