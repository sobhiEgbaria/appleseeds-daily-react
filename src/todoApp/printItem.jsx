import React, { Component } from "react";
import TodoApp from "./todoApp";
import "./css.css";
import Delete from "./delete";

class PrintItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.theItems.map((item) => (
          <div className="oneToDo" key={Math.random()}>
            <input
              type="text"
              placeholder="update her..."
              onChange={this.props.setText}
              value={this.props.text}
            />
            <button
              className="update"
              onClick={() => this.props.updateButton(item.id)}
            >
              update
            </button>

            <Delete delete={this.props.delete} id={item.id} />
            <div className="text">{item.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default PrintItem;
