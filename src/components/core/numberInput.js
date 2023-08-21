'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect  } from 'react';
import { StyleContext } from '../styleContext';
import sprintf from 'sprintf';
import styled from 'styled-components';

// Needs to be outside component to prevent re-render
const StyledNumberInput = styled.input`
  width: ${props => props.vars.width};
  color: ${props => props.vars.highlight};
  font: ${props => props.vars.font};
  background-color: ${props => props.vars.backgroundColor};
  border: none;
  outline: none;
  &::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function NumberInput({
  value,
  min,
  max,
  step,
  width,
  decimals,
  onChange
}) {
  const isNumber = (value) => {
    return !isNaN(value) && value !== '';
  }

  const truncate = (value) => {
    if (decimals !== undefined) {
      return sprintf(`%.${decimals}f`, parseFloat(value));
    }
    return value;
  };

  const [invalidState, setInvalid] = useState(false);
  const [valueState, setValue] = useState(truncate(value));

  const styleContext = useContext(StyleContext);

  /*useEffect(() => {
    console.log('NumberInput, useEffect, valueState:', valueState);
    setValue(valueState);
    handleChange(valueState);
  }, [valueState]);*/

  const handleChange = (value) => {
    const newValue = truncate(Math.min(max, Math.max(min, value)));
    setValue(newValue);
    //console.log('NumberInput.handleChange, newValue:', newValue);
    if (!invalidState && onChange) {
      onChange(newValue);
    }
  };

  const onKeyDownEvent = (event) => {
    if (event.which === 13) {
      handleChange(event.target.value);
    }
  }

  const onBlurEvent = (event) => {
    handleChange(event.target.value);
  }

  const onChangeEvent = (event) => {
    //console.log('NumberInput.onChangeEvent, event.target.value:', event.target.value);
    if (!isNumber(event.target.value)) {
      setInvalid(true);
      //setValue(event.target.value);
      handleChange(event.target.value);
      return;
    }
    setInvalid(false);
    handleChange(event.target.value);
    //setValue(truncate(event.target.value));
  }

  const vars = {
    width,
    backgroundColor: invalidState ? styleContext.lowlighterr : styleContext.lowlight,
    lowlight: styleContext.lowlight,
    lowlighterr: styleContext.lowlighterr,
    highlight: styleContext.highlight,
    font: styleContext.font,
  };

  return (
    <StyledNumberInput
      type='number'
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChangeEvent.bind(this)}
      onKeyDown={onKeyDownEvent.bind(this)}
      onBlur={onBlurEvent.bind(this)}
      vars={vars}
    ></StyledNumberInput>
  );
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  width: PropTypes.string,
  decimals: PropTypes.number,
  onChange: PropTypes.func,
}

NumberInput.defaultProps = {
  value: 0,
  min: 0,
  max: 1,
  step: 1,
  width: 'auto',
}

/*NumberInput.contextTypes = {
  styleContext: PropTypes.object,
}*/
