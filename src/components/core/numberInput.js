'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect  } from 'react';
import { StyleContext } from '../styleContext';
import sprintf from 'sprintf';

export default function NumberInput({value, width, decimals, onChange, onFinishChange}) {
  const truncate = (value) => {
    if (decimals !== undefined) {
      return sprintf(`%.${decimals}f`, parseFloat(value));
    }
    return value;
  };

  const [invalidState, setInvalid] = useState(false);
  const [valueState, setValue] = useState(truncate(value));

  const styleContext = useContext(StyleContext);

  useEffect(() => {
    console.log('NumberInput, useEffect, valueState:', valueState);
    setValue(valueState);
    handleChange(valueState);
  }, [valueState]);

  const handleChange = (value) => {
    console.log('NumberInput.handleChange, value:', value);
    setValue(value);
    if (!invalidState && onChange) {
      onChange(parseFloat(value));
    }
    if (!invalidState && onFinishChange) {
      onFinishChange(parseFloat(value));
    }
  };

  const onKeyDownEvent = (e) => {
    if(e.which === 13) {
      handleChange(truncate(e.target.value));
    }
  }

  const onBlurEvent = (e) => {
    handleChange(truncate(e.target.value));
  }

  const isNumber = (value) => {
    return !isNaN(value) && value !== '';
  }

  const onChangeEvent = (e) => {
    if (!isNumber(e.target.value)) {
      setInvalid(true);
      setValue(e.target.value);
      return;
    }
    console.log('NumberInput.onChangeEvent, e.target.value:', e.target.value);
    setInvalid(false);
    setValue(e.target.value);
  }

  return (
    <input
      style={{
        width: width,
        color: styleContext.highlight,
        font: styleContext.font,
        padding: `${styleContext.paddingY}px ${styleContext.paddingX}px`,
        backgroundColor: invalidState ? styleContext.lowlighterr : styleContext.lowlight,
        border: 'none',
        outline: 'none',
      }}
      type='text'
      value={valueState}
      onChange={onChangeEvent.bind(this)}
      onKeyDown={onKeyDownEvent.bind(this)}
      onBlur={onBlurEvent.bind(this)}
    ></input>
  );
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  width: PropTypes.string,
  decimals: PropTypes.number,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
}

NumberInput.defaultProps = {
  width: '100%',
}

NumberInput.contextTypes = {
  style: PropTypes.object,
}
