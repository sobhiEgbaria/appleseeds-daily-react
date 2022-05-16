import React from "react";

const Buttons = () => {
  return (
    <>
      <Important />
      <NotImportant />
    </>
  );
};

const Important = () => {
  return <button className="Important"> Important</button>;
};

const NotImportant = () => {
  return <button> NotImportant</button>;
};

export default Buttons;
