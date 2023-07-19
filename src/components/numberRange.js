'use strict';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Number from './numberInput.js';
import Range from './rangeSlider.js';

/*
componentWillReceiveProps(nextProps) {
  this.setState({
    value: nextProps.value
  });
}
*/

export default function NumberRange({ value, min, max, step, width, rangeWidth, numberWidth, onChange, onFinishChange, decimals }) {
  const [valueState, setValue] = useState(value);

  const handleChange = (value) => {
    const newValue = Math.min(max, Math.max(min, value));
    console.log('NumberRange.handleChange, value:', value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }

  const handleFinishChange = (value) => {
    const newValue = Math.min(max, Math.max(min, value));
    setValue(newValue);
    if (onFinishChange) {
      onFinishChange(newValue);
    }
  }

  return (
    <div
      style={{
        width: width,
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Range
        value={valueState}
        min={min}
        max={max}
        step={step}
        width={rangeWidth}
        onChange={handleChange.bind(this)}
        onFinishChange={handleFinishChange.bind(this)}
      />
      <Number
        decimals={decimals}
        value={valueState}
        width={numberWidth}
        onChange={handleChange.bind(this)}
        onFinishChange={handleFinishChange.bind(this)}
      />
    </div>
  );
}

NumberRange.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  width: PropTypes.string,
  rangeWidth: PropTypes.string,
  numberWidth: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
}

NumberRange.defaultProps = {
  rangeWidth: '65%',
  numberWidth: '30%',
  width: '100%',
};
