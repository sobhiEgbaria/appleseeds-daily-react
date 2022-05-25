import React, { Component } from "react";
import TodoApp from "./todoApp";

class PrintItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.theItems.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}

export default PrintItem;
