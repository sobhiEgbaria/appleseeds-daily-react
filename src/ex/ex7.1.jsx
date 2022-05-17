import React from "react";
import { useState } from "react";

// solved by hook with function

const State = (data) => {
  data = {
    text: "increment",
    x: 0,
  };

  let [num, setName] = useState(data.x);

  const change = () => {
    setName(num++);
  };

  return (
    <>
      <button onClick={change}>{data.text}</button>
      <label htmlFor="">{num}</label>
    </>
  );
};

export default State;

//anther solution by setStatus with class

// class ex71 extends React.Component {
//   data = {
//     text: "increment",
//     num: 0,
//   };

//   change = () => {
//     this.setState({ num: this.data.num++ });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.change}>{this.data.text}</button>
//         <label htmlFor="">{this.data.num}</label>
//       </>
//     );
//   }
// }

// export default ex71;
