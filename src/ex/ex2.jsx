import React from "react";

function Ex2() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <div>
      {" "}
      {data} and {number1 + number2} and {string}
    </div>
  );
}

export default Ex2;
