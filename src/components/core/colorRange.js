import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { StyleContext } from '../styleContext';
import NumberRange from './numberRange.js';

export default function ColorRange({value, label, labelWidth, inputWidth, width, onChange, onFinishChange}) {
  const [valueState, setValue] = useState(value);

  const style = useContext(StyleContext);

  /*const handleFinishChange = (value) => {
    if (onFinishChange) {
      onFinishChange(value);
    }
  }*/

  const handleChange = (value) => {
    console.log('ColorRange.handleChange, value:', value);
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'left',
      }}
    >
      <div
        style={{
          minWidth: labelWidth,
          font: style.font,
          color: style.highlight,
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
        numberWidth={inputWidth}
        onChange={handleChange.bind(this)}
        //onFinishChange={handleFinishChange.bind(this)}
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
  //onFinishChange: PropTypes.func,
};

ColorRange.contextTypes = {
  style: PropTypes.object
};

ColorRange.defaultProps = {
  width: '100%',
  labelWidth: '20%',
  inputWidth: '20%',
};