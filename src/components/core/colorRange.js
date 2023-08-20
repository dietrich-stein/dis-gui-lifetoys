import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { StyleContext } from '../styleContext';
import NumberRange from './numberRange.js';

export default function ColorRange({value, label, labelWidth, inputWidth, width, onChange}) {
  const [valueState, setValue] = useState(value);

  const styleContext = useContext(StyleContext);

  /*useEffect(() => {
    console.log('ColorRange, useEffect, valueState:', valueState);
    setValue(valueState);
    handleChange(valueState);
  }, [valueState]);*/

  const handleChange = (value) => {
    //console.log('ColorRange.handleChange, value:', value);
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'left',
        marginBottom: '2px',
      }}
    >
      <div
        style={{
          minWidth: labelWidth,
          font: styleContext.font,
          color: styleContext.readOnly,
          alignSelf: 'center',
          paddingRight: '15px',
          userSelect: 'none',
        }}
      >
        {label}
      </div>
      <NumberRange
        value={valueState}
        min={0}
        max={255}
        step={1}
        width={width}
        numberWidth={inputWidth}
        onChange={handleChange.bind(this)}
      />
    </div>
  );
}

ColorRange.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string,
  labelWidth: PropTypes.string,
  inputWidth: PropTypes.string,
  onChange: PropTypes.func,
};

ColorRange.contextTypes = {
  style: PropTypes.object
};

ColorRange.defaultProps = {
  width: '100%',
  labelWidth: '20%',
  inputWidth: '20%',
};