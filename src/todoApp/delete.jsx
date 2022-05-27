import React, { Component } from "react";
import TodoApp from "./todoApp";
import "./css.css";

class Delete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="delete"
        onClick={() => this.props.delete(this.props.id)}
      >
        delete
      </button>
    );
  }
}

export default Delete;
