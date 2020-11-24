import React, { useState } from 'react';

export default function Counter({ className }) {
  // let counterValue = 5;

  // [stateVariable, setter] = useState(initialValue)
  const [counterValue, setCounterValue] = useState(10);
  const [counterColor, setCounterColor] = useState('white');

  function handleIncrementClick() {
    setCounterValue(counterValue + 1);
    setCounterColor('green');
  }

  return (
    <section className={className}>
      <div className="row">
        <div className="col-3 text-center">
          <p style={{ backgroundColor: counterColor }}>{counterValue}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setCounterValue(counterValue - 1);
                setCounterColor('red');
              }}
            >
              Decrement
            </button>
            &nbsp;
            <button className="btn btn-info" onClick={handleIncrementClick}>
              Increment
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
