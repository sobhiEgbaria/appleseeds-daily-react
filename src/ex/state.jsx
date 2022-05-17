import React from "react";

const State = (data) => {
  data = {
    text: "state example",
    x: 0,
  };

  return (
    <>
      <button>{data.text}</button>
      <label htmlFor="">{data.x}</label>
    </>
  );
};

export default State;
