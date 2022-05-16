import logo from "./logo.svg";

import react from "react";
import EX1 from "./ex/ex1";
import Ex2 from "./ex/ex2";
import Ex3 from "./ex/ex3";
import Ex4 from "./ex/ex4";
import Ex5 from "./ex/ex5";
import Ex6 from "./ex/ex6";
class App extends react.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        {/* 
        
        <EX1 />
        <Ex2 /> 
        <Ex3 />
        <Ex4 />
         <Ex6 />
        */}
        <Ex5 />
      </>
    );
  }
}

export default App;
