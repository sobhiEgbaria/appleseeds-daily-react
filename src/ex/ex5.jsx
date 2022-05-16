import React from "react";

const Buttons = () => {
  return (
    <>
      <TheButton
        value="Important"
        style={{ fontWeight: "bold", margin: "5px" }}
      />

      <TheButton value="NotImportant" />
    </>
  );
};

const TheButton = (props) => {
  return <button style={props.style}> {props.value} </button>;
};

export default Buttons;
