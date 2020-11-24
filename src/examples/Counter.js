import React, { useState } from 'react';

export default function Counter() {
  // let counterValue = 5;

  // [stateVariable, setter] = useState(initialValue)
  const [counterValue, setCounterValue] = useState(10);
  const [counterColor, setCounterColor] = useState('white');

  const [value, setValue] = useState('whatever');

  function handleIncrementClick() {
    console.log('You clicked on the increment button');
    setCounterValue(counterValue + 1);
    setCounterColor('green');
  }

  return (
    <section>
      <div className="row">
        <div className="col-3 text-center">
          <p style={{ backgroundColor: counterColor }}>{counterValue}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p>
            <button className="btn btn-primary">Decrement</button>&nbsp;
            <button className="btn btn-info" onClick={handleIncrementClick}>
              Increment
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
