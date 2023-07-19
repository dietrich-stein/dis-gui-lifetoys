import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { StyleContext } from './styleContext';
import NumberRangeWidget from './numberRange.js';

export default function ColorRange({label, value, onChange, onFinishChange}) {
  const [valueState, setValue] = useState(value);

  const style = useContext(StyleContext);

  const handleFinishChange = (value) => {
    if (onFinishChange) {
      onFinishChange(value);
    }
  }

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div
      style={{
        padding: `${style.paddingY}px 0px`,
        paddingBottom: '0px',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <span
        style={{
          font: style.font,
          color: style.highlight,
          width: '20%',
          display: 'inline-block',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
        }}
      >
        {label}
      </span>
      <NumberRangeWidget
        width='80%'
        min={0}
        max={255}
        step={1}
        value={valueState}
        onChange={handleChange.bind(this)}
        onFinishChange={handleFinishChange.bind(this)}
      />
    </div>
  );
}

ColorRange.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
};

ColorRange.contextTypes = {
  style: PropTypes.object
};
