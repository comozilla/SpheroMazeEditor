import React from "react";
import ReactDOM from "react-dom";

export default class TrayItem extends React.Component {
  constructor(props) {
    super(props);
  }
  static get propTypes() {
    return {
      itemColor: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired
    };
  }
  render() {
    return (
      <li style={{backgroundColor: this.props.itemColor}}>
        <span className={"fa " + this.props.icon} />
      </li>
    );
  }
}
