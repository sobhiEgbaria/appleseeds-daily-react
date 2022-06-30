import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

class PicsApp extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  onSearchSubmit = (term) => {
    const url = "https://api.unsplash.com/search/photos";
    axios.get(url, {});

    console.log(term);
  };
  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
        </div>
      </>
    );
  }
}

export default PicsApp;
