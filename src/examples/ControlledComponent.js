import React, { useState } from 'react';

export default function ControlledComponent() {
  const [fieldValue, setFieldValue] = useState('');

  function handleUpdate(event) {
    setFieldValue(event.currentTarget.value);
  }

  return (
    <section>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="some-value">Enter a value here:</label>
            <input
              type="text"
              id="some-value"
              className="form-control"
              onChange={handleUpdate}
              value={fieldValue}
            />
          </div>
        </div>
        <div className="col">
          <p>The value in the form field is {fieldValue}</p>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => setFieldValue('')}
            >
              Reset value
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
