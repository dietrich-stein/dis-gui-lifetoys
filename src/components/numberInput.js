'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { StyleContext } from './styleContext';
import sprintf from 'sprintf';

/*componentWillReceiveProps(nextProps) {
  this.setState({
    invalid: !this.isNumber(nextProps.value),
    value: this.truncate(nextProps.value),
  });
}*/

export default function NumberInput({value, width, decimals, onChange, onFinishChange}) {
  const [invalidState, setInvalid] = useState(false);
  const [valueState, setValue] = useState(value);

  const style = useContext(StyleContext);

  const handleChange = (value) => {
    if (!invalidState && onChange) {
      onChange(parseFloat(value));
    }
    if (!invalidState && onFinishChange) {
      onFinishChange(parseFloat(value));
    }
  };

  const truncate = (value) => {
    if (decimals !== undefined) {
      return sprintf(`%.${decimals}f`, parseFloat(value));
    }
    return value;
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
    setInvalid(false);
    setValue(e.target.value);
  }

  return (
    <input
      style={{
        width: width,
        color: style.highlight,
        font: style.font,
        padding: `${style.paddingY}px ${style.paddingX}px`,
        backgroundColor: invalidState ? style.lowlighterr : style.lowlight,
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
