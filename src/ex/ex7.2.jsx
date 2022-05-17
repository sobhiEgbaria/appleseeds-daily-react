import React, { Component } from "react";

export default class ex72 extends Component {
  state = { isHidden: false };

  hideShow = () => {
    this.setState((prev) => {
      return { isHidden: !prev.isHidden };
    });
  };

  render() {
    return (
      <>
        <div
          className="box"
          style={{
            width: "300px",
            height: "300px",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <button onClick={this.hideShow}>click</button>
          {this.state.isHidden && (
            <div
              className="inner-box"
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "red",
                margin: "10px",
              }}
            ></div>
          )}
        </div>
      </>
    );
  }
}
