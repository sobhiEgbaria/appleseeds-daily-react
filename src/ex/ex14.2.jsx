import React, { Component } from "react";

class Ex142 extends Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
  }

  componentDidMount = () => {
    this.textRef.current.addEventListener("load", this.copy);
  };

  copy = () => {
    let copyText = this.textRef.current;
    copyText.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div>
        <textarea id="textarea" ref={this.textRef}></textarea>

        <br />
        <button onClick={this.copy}>copy</button>
      </div>
    );
  }
}

export default Ex142;
