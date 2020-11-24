import React, { useState } from 'react';

export default function CustomBox() {
  const [color, setColor] = useState('black');
  const [customColor, setCustomColor] = useState('');

  let boxStyle = {
    height: '200px',
    width: '200px',
    backgroundColor: color,
    border: '5px yellow dashed',
  };

  function handleColorChange(toColor) {
    setColor(toColor);
  }

  // Not a standard DOM event, but React's SyntheticEvent
  function handleChange(event) {
    setCustomColor(event.currentTarget.value);
  }

  return (
    <section className="row">
      <div className="col-4">
        <div style={boxStyle}></div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => handleColorChange('blue')}
          >
            Blue
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => handleColorChange('red')}
          >
            Red
          </button>
          &nbsp;
          <button
            className="btn btn-success"
            onClick={() => handleColorChange('green')}
          >
            Green
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="custom-color">Enter a custom color: </label>
          <input
            type="text"
            className="form-control"
            id="custom-color"
            onChange={handleChange}
          />
          <button
            className="btn btn-warning"
            onClick={() => handleColorChange(customColor)}
          >
            Set custom color
          </button>
        </div>
      </div>
    </section>
  );
}
