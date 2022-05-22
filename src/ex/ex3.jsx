import React from "react";

const Box1 = () => {
  return (
    <div className="box1">
      <Box2>
        <Box3>
          <Box4 />
          <Box4 />
        </Box3>
      </Box2>
    </div>
  );
};

const Box2 = (props) => {
  return <div className="box2">{props.children}</div>;
};
const Box3 = (props) => {
  return <div className="box3">{props.children}</div>;
};
const Box4 = () => {
  return <div className="box4"></div>;
};

export default Box1;
