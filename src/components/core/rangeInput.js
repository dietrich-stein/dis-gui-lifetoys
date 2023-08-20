'use strict';

import PropTypes, { number } from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { StyleContext } from '../styleContext';
import styled from 'styled-components';

// Needs to be outside component to prevent re-render
const StyledRangeInput = styled.input`
  max-width: ${props => props.vars.width};
  flex: 0;
  padding: 0;
  font-size: 12px;
  cursor: pointer;
  -webkit-appearance: none;
  height: 10px;
  background: ${props => props.vars.lowlight};
  border: 1px solid ${props => props.vars.medlight};
  box-sizing: border-box;
  &::-webkit-slider-thumb {
    appearance: none;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    height: ${props => props.vars.thumbHeight};
    width: ${props => props.vars.thumbWidth};
    border-radius: 0;
    border: 1px solid ${props => props.vars.highlight};
    background: ${props => props.vars.highlight};
  }
`;

export default function RangeInput({
  value,
  min,
  max,
  step,
  decimals,
  width,
  thumbHeight,
  thumbWidth,
  onChange,
}) {
  const styleContext = useContext(StyleContext);

  const vars = {
    width,
    lowlight: styleContext.lowlight,
    medlight: styleContext.medlight,
    highlight: styleContext.highlight,
    thumbWidth,
    thumbHeight,
  };

  const truncate = (value) => {
    if (decimals !== undefined) {
      return sprintf(`%.${decimals}f`, parseFloat(value));
    }
    return value;
  };

  const [valueState, setValue] = useState(truncate(value));

  const handleChangeEvent = (event) => {
    const newValue = truncate(Math.min(max, Math.max(min, event.target.value)));
    //console.log('RangeInput.handleChange, newValue:', newValue);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <StyledRangeInput
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={handleChangeEvent}
      vars={vars}
    ></StyledRangeInput>
  );

}

RangeInput.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  width: PropTypes.string,
  thumbHeight: PropTypes.string,
  thumbWidth: PropTypes.string,
  onChange: PropTypes.func,
}

RangeInput.defaultProps = {
  value: 0,
  min: 0,
  max: 1,
  step: 1,
  width: 'auto',
  thumbHeight: '10px',
  thumbWidth: '10px',
};

/*
RangeSlider.contextTypes = {
  style: PropTypes.object,
  folder: PropTypes.shape({
    subscribe: PropTypes.func
  }),
}
  componentDidMount() {
    if (this.context.folder) {
      this.unsubscribeFolder = this.context.folder.subscribe((expanded) => {
        if (expanded) {
          this.forceUpdate();
        }
      })
    }
  }
  componentWillUnmount() {
    if (this.unsubscribeFolder) {
      this.unsubscribeFolder();
    }
  }
*/