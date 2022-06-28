import React, { Component } from "react";
import SeasonsDisplay from "./components/SeasonsDisplay";

class SeasonsApp extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <h1>Err: {this.state.errMessage} </h1>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <h1>lat: {this.state.lat} </h1>;
    }
    return <h1>loading</h1>;
  }
}

export default SeasonsApp;
