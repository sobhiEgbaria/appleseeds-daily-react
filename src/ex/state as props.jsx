import React from "react";

// pass a state as props
const Perant = (data) => {
  data = {
    text: "gogo lolo",
  };

  return <State name={data.text} />;
};

const State = (props) => {
  return <button>{props.name}</button>;
};

export default Perant;
