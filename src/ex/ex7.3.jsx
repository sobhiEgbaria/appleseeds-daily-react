import React, { Component } from "react";

class ex73 extends React.Component {
  state = {
    num: 0,
    increment: "increment",
    discernment: "discernment",
    color: "black",
  };

  increment = () => {
    this.setState(
      (prev) => {
        return { num: prev.num < 10 ? prev.num + 1 : prev.num };
      },
      () => {
        this.color();
      }
    );
  };

  discernment = () => {
    this.setState(
      (prev) => {
        return { num: prev.num > -10 ? prev.num - 1 : prev.num };
      },
      () => {
        this.color();
      }
    );
  };

  color = () => {
    return {
      num:
        this.state.num === 0
          ? { color: (this.state.color = "black") }
          : this.state.num > 0
          ? { color: (this.state.color = "green") }
          : { color: (this.state.color = "red") },
    };
  };

  render() {
    return (
      <div>
        <button style={{ margin: "10px" }} onClick={this.increment}>
          {this.state.increment}
        </button>
        <button style={{ margin: "10px" }} onClick={this.discernment}>
          {this.state.discernment}
        </button>
        <label
          style={{
            margin: "10px",
            fontSize: "50px",
            color: `${this.state.color}`,
          }}
          htmlFor=""
        >
          {this.state.num}
        </label>
      </div>
    );
  }
}

export default ex73;
