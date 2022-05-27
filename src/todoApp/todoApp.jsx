import React, { Component } from "react";
import AddTodo from "./addTodo";
import Delete from "./delete";
import PrintItem from "./printItem";
import "./css.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      theItems: [],
      text: "",
    };
  }

  // newItem ==> setState the value from the input text to the  newItem
  newItem = (e) => {
    this.setState({ newItem: e.target.value });
  };

  //addTOdo ==> add the newItem to the list after submit
  addTOdo = (e) => {
    e.preventDefault();
    let theItemsNew = [
      ...this.state.theItems,
      {
        id: Math.random(),
        name: this.state.newItem,
      },
    ];
    this.setState({ theItems: theItemsNew, newItem: "" });
  };

  //delete ==>
  delete = (id) => {
    let theItemsNew = this.state.theItems.filter((item) => item.id != id);

    this.setState({ theItems: theItemsNew });
  };

  //update;
  updateButton = (id) => {
    console.log(this.state.text);
    let newUpdate = this.state.theItems.map((item) => {
      if (item.id === id) return { ...item, name: this.state.text };
    });
    this.setState({ theItems: newUpdate });
  };

  //updateText
  setText = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <AddTodo
          newItem={this.newItem}
          addTOdo={this.addTOdo}
          restValue={this.state.newItem}
        />
        <PrintItem
          theItems={this.state.theItems}
          delete={this.delete}
          updateButton={this.updateButton}
          setText={this.setText}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default TodoApp;
