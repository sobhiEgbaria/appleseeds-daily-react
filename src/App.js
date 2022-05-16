import logo from "./logo.svg";
import "./App.css";

import react from "react";
import EX1 from "./ex/ex1";
import Ex2 from "./ex/ex2";
import Ex3 from "./ex/ex3";
import Ex4 from "./ex/ex4";

class App extends react.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <EX1 />
        <Ex2 />
        <Ex3 />
        <Ex4 />
      </>
    );
  }
}

export default App;
