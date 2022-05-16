import React from "react";

class Ex6 extends React.Component {
  render() {
    return (
      <div>
        <Btn
          text="important"
          styling={{ fontWeight: "bold", margin: "50px" }}
        />
        <Btn text="not important" />
      </div>
    );
  }
}

class Btn extends React.Component {
  render() {
    return <button style={this.props.styling}> {this.props.text} </button>;
  }
}

export default Ex6;
