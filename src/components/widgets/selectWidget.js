'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import Row from '../core/row';
import Label from '../core/label';
import Control from '../core/control';
import { StyleContext } from '../styleContext';

export default function SelectWidget({ options, value, label, onChange, onFinishChange }) {
  const [valueState, setValue] = useState(value);

  const style = useContext(StyleContext);

  const handleChange = (event) => {
    setValue(event.target.value)
    if (onChange) {
      onChange(event.target.value);
    }
    if (onFinishChange) {
      onFinishChange(event.target.value);
    }
  };

  return (
    <Row>
      <Label>{label}</Label>
      <Control>
        <select
          value={valueState}
          onChange={handleChange}
          style={{
            backgroundColor: style.lowlight,
            color: style.highlight,
            font: style.font,
            height: style.computed.itemHeight,
            lineHeight: style.computed.itemHeight,
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            MozAppearance: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          {options.map((opt, index) => {
            return (
              <option
                value={opt}
                key={opt + index}
                style={{
                  backgroundColor: style.font,
                }}
              >
                {opt}
              </option>
            )
          })}
        </select>
      </Control>
    </Row>
  );
}

SelectWidget.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
};

SelectWidget.contextTypes = {
  style: PropTypes.object
};
