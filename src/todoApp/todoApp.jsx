import React, { Component } from "react";
import AddTodo from "./addTodo";
import PrintItem from "./printItem";

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }
  // my data in the state
  state = {
    newItem: "",
    theItems: [],
  };

  // newItem ==> setState the value from the input text to the  newItem
  newItem = (e) => {
    this.setState({ newItem: (this.state.newItem = e.target.value) });
  };

  //addTOdo ==> add the newItem to the lest after submit
  addTOdo = (e) => {
    e.preventDefault();
    let theItemsNew = [...this.state.theItems, this.state.newItem];
    this.setState({ theItems: theItemsNew, newItem: "" });
  };

  render() {
    return (
      <div>
        <AddTodo
          newItem={this.newItem}
          addTOdo={this.addTOdo}
          restValue={this.state.newItem}
        />
        <PrintItem theItems={this.state.theItems} />
      </div>
    );
  }
}

export default TodoApp;
