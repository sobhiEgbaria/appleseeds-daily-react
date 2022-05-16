import React from "react";

const Buttons = () => {
  return (
    <>
      <Important value="Important" />
      <NotImportant value="NotImportant" />
    </>
  );
};

const Important = (props) => {
  return <button className="Important"> {props.value}</button>;
};

const NotImportant = (props) => {
  return <button> {props.value}</button>;
};

export default Buttons;
