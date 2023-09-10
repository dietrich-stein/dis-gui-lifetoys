'use strict';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Row from '../core/row';
import Label from '../core/label';
import Control from '../core/control';
import NumberInput from '../core/numberInput';
import NumberRange from '../core/numberRange';

/*
  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        value: state.value
      };
    }
    return null;
  }
*/
export default function NumberWidget({value, decimals, min, max, step, label, onChange, onFinishChange}) {
  const [valueState, setValue] = useState(value);

  useEffect(() => {
    handleChange();
  }, [valueState]);

  const handleFinishChange = (value) => {
    setValue(value);
    if (onFinishChange) {
      onFinishChange(value);
    }
  }

  const handleChange = (value) => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  }

  let row;
  if (min !== undefined && max !== undefined) {
    // Range w/input
    row = <Row>
      <Label>{label}</Label>
      <Control>
        <NumberRange
          decimals={decimals}
          value={valueState}
          min={min}
          max={max}
          step={step}
          onChange={handleChange.bind(this)}
          onFinishChange={handleFinishChange.bind(this)}
        />
      </Control>
    </Row>;
  } else {
    // Input only
    row = <Row>
      <Label>{label}</Label>
      <Control>
        <NumberInput
          decimals={decimals}
          value={valueState}
          onChange={handleChange.bind(this)}
          onFinishChange={handleFinishChange.bind(this)}
          width='100%'
        />
      </Control>
    </Row>;
  }

  return (<>{row}</>);
}

NumberWidget.propTypes = {
  value: PropTypes.number,
  decimals: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
};

NumberWidget.defaultProps = {
  value: 0,
};
