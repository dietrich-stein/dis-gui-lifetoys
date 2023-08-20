'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { StyleContext } from '../styleContext';
import Row from './row';
import Label from './label';
import Control from './control';
import ColorRange from './colorRange';

/*
  static getDerivedStateFromProps(props, state) {
    const nextState = {};
    let hasChange = false;
    if (props.red !== state.red) {
      nextState.red = state.red;
      hasChange = true;
    }
    if (props.green !== state.green) {
      nextState.green = state.green;
      hasChange = true;
    }
    if (props.blue !== state.blue) {
      nextState.blue = state.blue;
      hasChange = true;
    }
    if (props.expanded !== state.expanded) {
      nextState.expanded = state.expanded;
      hasChange = true;
    }
    if (hasChange) {
      return nextState;
    }
    return null;
  }
*/

export default function ColorWidget({red, green, blue, expanded, label, onChange}) {
  const [expandedState, setExpanded] = useState(expanded);
  const [redState, setRed] = useState(red);
  const [greenState, setGreen] = useState(green);
  const [blueState, setBlue] = useState(blue);

  const style = useContext(StyleContext);

  // Ensures ColorWidget.handleChange() gets mutated values
  useEffect(() => {
    //console.log('ColorWidget, useEffect, redState:', redState, 'greenState:', greenState, 'blueState:', blueState);
    handleChange();
  }, [redState, greenState, blueState]);

  const handleColorClick = () => {
    setExpanded(!expandedState);
  }

  const handleChangeRed = (value) => {
    //console.log('R ColorWidget.handleChangeRed, value:', value);
    setRed(value);
    handleChange();
  }

  const handleChangeGreen = (value) => {
    //console.log('G ColorWidget.handleChangeGreen, value:', value);
    setGreen(value);
    handleChange();
  }

  const handleChangeBlue = (value) => {
    //console.log('B ColorWidget.handleChangeBlue, value:', value);
    setBlue(value);
    handleChange();
  }

  const handleChange = () => {
    //console.log('ColorWidget.handleChange, rgb:', redState, greenState, blueState);
    if (onChange) {
      onChange({
        red: redState,
        green: greenState,
        blue: blueState
      });
    }
  }

  return (
    <Row>
      <Label>{label}</Label>
      <Control>
        <div
          onClick={handleColorClick.bind(this)}
          style={{
            font: style.font,
            backgroundColor: `rgb(${redState}, ${greenState}, ${blueState})`,
            height: `${style.computed.itemHeight}px`,
            lineHeight: `${style.computed.itemHeight}px`,
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            textShadow: 'black 0 0 4px, black 0 0 4px, black 0 0 4px, black 0 0 4px, black 0 0 4px',
            cursor: 'default',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            cursor: 'pointer',
          }}
        >
          {redState}, {greenState}, {blueState}
        </div>
        {expandedState &&
        <>
          <ColorRange
            label='Red'
            labelWidth={style.colorLabelWidth}
            inputWidth={style.colorInputWidth}
            value={redState}
            decimals={0}
            onChange={handleChangeRed.bind(this)}
          />
          <ColorRange
            label='Green'
            labelWidth={style.colorLabelWidth}
            inputWidth={style.colorInputWidth}
            value={greenState}
            onChange={handleChangeGreen.bind(this)}
          />
          <ColorRange
            label='Blue'
            labelWidth={style.colorLabelWidth}
            inputWidth={style.colorInputWidth}
            value={blueState}
            onChange={handleChangeBlue.bind(this)}
          />
        </>
        }
      </Control>
    </Row>
  );
}

ColorWidget.propTypes = {
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,
  expanded: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

ColorWidget.defaultProps = {
  red: 0,
  green: 0,
  blue: 0,
  expanded: false,
};

ColorWidget.contextTypes = {
  style: PropTypes.object
};
