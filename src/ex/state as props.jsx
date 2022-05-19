import React from "react";

// pass a state as props
const Perant = (state) => {
  state = {
    text: "gogo lolo",
  };

  return <State name={state.text} />;
};

const State = (props) => {
  return <button>{props.name}</button>;
};

export default Perant;
