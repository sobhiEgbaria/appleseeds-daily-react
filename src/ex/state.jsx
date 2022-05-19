import React from "react";

const State = (state) => {
  state = {
    text: "state example",
    x: 0,
  };

  return (
    <>
      <button>{state.text}</button>
      <label htmlFor="">{state.x}</label>
    </>
  );
};

export default State;
