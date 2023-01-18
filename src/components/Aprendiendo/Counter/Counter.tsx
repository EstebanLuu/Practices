import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClickCounterSum = (n: number = 1) => {
    setCounter(counter + n);
  };

  const handleClickCounterRest = (n: number = 1) => {
    setCounter(counter - n);
  };

  return (
    <div className="section">
      <h3 className="title">Counter</h3>
      <div className="buttonContainer">
        <button
          className="buttonCounter button"
          onClick={() => handleClickCounterRest()}
        >
          -
        </button>
        <h4 className="counter">{counter}</h4>
        <button
          className="buttonCounter button"
          onClick={() => handleClickCounterSum()}
        >
          +
        </button>
      </div>
      <button className="buttonCounter button" onClick={() => setCounter(0)}>
        RESET
      </button>
    </div>
  );
};

export default Counter;
