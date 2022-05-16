import React from "react";

const Quiz = () => {
  return (
    <>
      <QuizTitle />
      <Q1 />
      <Q1Input />
      <Q2 />
      <Q2Input />
    </>
  );
};

const QuizTitle = () => {
  return <h1 className="title">how do you like front end</h1>;
};
const Q1 = () => {
  return <p className="firstQ">how much you love front end</p>;
};
const Q1Input = () => {
  return <input type="range" name="q1Input" id="" />;
};
const Q2 = () => {
  return <p className="secondQ">what your favorite front end topic </p>;
};

const Q2Input = () => {
  return <input type="text" name="secondInput" id="" />;
};

export default Quiz;
