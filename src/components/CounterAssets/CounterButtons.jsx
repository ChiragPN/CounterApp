import React from "react";
import "./CounterStyling.css";

export default function CounterButtons({bt, increaseBy, decreaseBy}) {

  CounterButtons.defaultProps ={
    bt:1
  }

  const increaseCount = () => {
    increaseBy(bt);
  };

  const decreaseCount = () => {
    decreaseBy(bt);
  };

  return (
    <div className="btn-row">
      <button onClick={increaseCount} className="btn">
        Increase {bt}
      </button>
      <button onClick={decreaseCount} className="btn">
        Decrease {bt}
      </button>
    </div>
  );
}
