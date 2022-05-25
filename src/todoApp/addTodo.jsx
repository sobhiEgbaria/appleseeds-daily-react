import React, { Component } from "react";
import TodoApp from "./todoApp";

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <form onSubmit={this.props.addTOdo}>
        <input
          type="text"
          className="todo"
          placeholder="Add to the list"
          onChange={this.props.newItem}
          value={this.props.restValue}
        />
        <input type="submit" value="ADD" />
      </form>
    );
  }
}

export default AddTodo;
