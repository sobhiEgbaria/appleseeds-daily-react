import React, { Component } from "react";

class Forms extends Component {
  state = {
    name: "gogo lolo",
  };

  handleChange = (e) => {
    this.setState((prevState) => {
      return { name: e.target.value };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
  };

  handleSelectChange = (e) => {
    this.setState((prevState) => {
      return { name: e.target.value };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button>click me </button>
        <h3>{this.state.name}</h3>
        <h2>--------------------</h2>

        <select onChange={this.handleSelectChange}>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
        </select>
        <input type="submit" onChange={this.handleSubmit} />
        <h3>{this.state.name}</h3>
      </form>
    );
  }
}

export default Forms;
