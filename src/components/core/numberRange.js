'use strict';

import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import NumberInput from './numberInput.js';
import RangeInput from './rangeInput.js';
import { StyleContext } from '../styleContext.js';

export default function NumberRange({
  value,
  min,
  max,
  step,
  width,
  rangeWidth,
  numberWidth,
  onChange,
  //onFinishChange,
  decimals
}) {
  const [valueState, setValue] = useState(value);

  //const styleContext = useContext(StyleContext);

  /*useEffect(() => {
    console.log('NumberRange, useEffect, value:', value);
    setValue(valueState);
    handleChange(valueState);
  }, [valueState]);*/

  const handleChange = (value) => {
    const newValue = Math.min(max, Math.max(min, value));
    console.log('NumberRange.handleChange, newValue:', newValue);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }

  /*const handleFinishChange = (value) => {
    const newValue = Math.min(max, Math.max(min, value));
    setValue(newValue);
    if (onFinishChange) {
      onFinishChange(newValue);
    }
  }*/

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row',
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
        onChange={handleChange.bind(this)}
        //onFinishChange={handleFinishChange.bind(this)}
      />
      <NumberInput
        decimals={decimals}
        value={valueState}
        width={numberWidth}
        onChange={handleChange.bind(this)}
        //onFinishChange={handleFinishChange.bind(this)}
      />
    </div>
  );
}
/*
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
  //onFinishChange: PropTypes.func,
}

NumberRange.defaultProps = {
  rangeWidth: '70%',
  numberWidth: '30%',
  width: '100%',
};
