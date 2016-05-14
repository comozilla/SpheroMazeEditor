import React from "react";

export default class Block extends React.Component {
  constructor(props) {
    super(props);
  }
  static get propTypes() {
    return {
      itemColor: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired,
      attributes: React.PropTypes.arrayOf(React.PropTypes.object)
    };
  }
  render() {
    return (
      <li style={{ backgroundColor: this.props.itemColor }}>
        <span className={"fa " + this.props.icon} />
      </li>
    );
  }
}
