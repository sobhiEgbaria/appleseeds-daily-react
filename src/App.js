import react from "react";

import EX1 from "./ex/ex1";
import Ex2 from "./ex/ex2";
import Ex3 from "./ex/ex3";
import Ex4 from "./ex/ex4";
import Ex5 from "./ex/ex5";
import Ex6 from "./ex/ex6";
import Ex71 from "./ex/ex7.1";
import Ex72 from "./ex/ex7.2";
import StateAsProps from "./ex/state as props";
import State from "./ex/state";
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
         <Ex5 />
         <Ex6 />
          <Ex71 />
        */}
        <Ex72 />
      </>
    );
  }
}

export default App;
