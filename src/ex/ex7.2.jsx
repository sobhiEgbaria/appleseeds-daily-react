import React from "react";

class ex72 extends React.Component {
  data = {
    text: "increment",
    num: 0,
  };

  change = () => {
    this.setState({ num: this.data.num++ });
  };

  render() {
    return (
      <>
        <button onClick={this.change}>{this.data.text}</button>
        <label htmlFor="">{this.data.num}</label>
      </>
    );
  }
}

export default ex72;
