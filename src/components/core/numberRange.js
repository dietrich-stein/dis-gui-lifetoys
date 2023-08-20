'use strict';

import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext, useReducer } from 'react';
import NumberInput from './numberInput.js';
import RangeInput from './rangeInput.js';
//import { StyleContext } from '../styleContext.js';

export default function NumberRange({
  value,
  min,
  max,
  step,
  width,
  rangeWidth,
  numberWidth,
  onChange,
  decimals
}) {
  const [valueState, setValue] = useState(value);

  //const styleContext = useContext(StyleContext);

  /*useEffect(() => {
    //const newValue = Math.min(max, Math.max(min, value));
    console.log('NumberRange, useEffect, newValue:', newValue);
    //setValue(newValue);
    handleChange(valueState);
  }, [valueState]);*/

  const handleRangeChange = (value) => {
    const newValue = Math.min(max, Math.max(min, value));
    //console.log('NumberRange.handleRangeChange, newValue:', newValue);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }

  const handleNumberChange = (value) => {
    const newValue = Math.min(max, Math.max(min, value));
    //console.log('NumberRange.handleNumberChange, newValue:', newValue);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 0,
        width: {width}
      }}
    >
      <RangeInput
        value={valueState}
        min={min}
        max={max}
        step={step}
        width={rangeWidth}
        onChange={handleRangeChange.bind(this)}
      />
      <NumberInput
        decimals={decimals}
        value={valueState}
        min={min}
        max={max}
        step={step}
        width={numberWidth}
        onChange={handleNumberChange.bind(this)}
      />
    </div>
  );
}

/*
      <span style={{color: "white", fontSize: "9px", position: "relative", left: "-20px"}}>{valueState}</span>
      <TestInput
        value={valueState}
      />

*/

NumberRange.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  width: PropTypes.string,
  rangeWidth: PropTypes.string,
  numberWidth: PropTypes.string,
  onChange: PropTypes.func,
}

NumberRange.defaultProps = {
  rangeWidth: '70%',
  numberWidth: '30%',
  width: 'auto',
};
