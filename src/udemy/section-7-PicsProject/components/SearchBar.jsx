import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div class="ui fluid action input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <div
              class="ui button"
              onClick={(e) => {
                console.log("clicked");
              }}
            >
              Search
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;
