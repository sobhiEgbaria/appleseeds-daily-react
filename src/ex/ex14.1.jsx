import React, { Component } from "react";

class Ex141 extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.focus();
    console.log(this.myRef.current);
  }

  render() {
    <div className="App"></div>;
    return (
      <div>
        <h1>React-Refs</h1>
        <input type="text" ref={this.myRef} />
      </div>
    );
  }
}

export default Ex141;
