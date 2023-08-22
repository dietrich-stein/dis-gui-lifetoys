'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { StyleContext } from '../styleContext';
import Row from '../core/row';
import Label from '../core/label';
import Control from '../core/control';
import ColorRange from '../core/colorRange';

export default function ColorWidget({red, green, blue, expanded, label, onChange}) {
  const [expandedState, setExpanded] = useState(expanded);
  const [redState, setRed] = useState(red);
  const [greenState, setGreen] = useState(green);
  const [blueState, setBlue] = useState(blue);

  const styleContext = useContext(StyleContext);

  // Ensures ColorWidget.handleChange() gets mutated values
  useEffect(() => {
    handleChange();
  }, [redState, greenState, blueState]);

  const handleColorClick = () => {
    setExpanded(!expandedState);
  }

  const handleChangeRed = (value) => {
    setRed(value);
    handleChange();
  }

  const handleChangeGreen = (value) => {
    setGreen(value);
    handleChange();
  }

  const handleChangeBlue = (value) => {
    setBlue(value);
    handleChange();
  }

  const handleChange = () => {
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
            font: styleContext.font,
            backgroundColor: `rgb(${redState}, ${greenState}, ${blueState})`,
            height: `${styleContext.computed.itemHeight}px`,
            lineHeight: `${styleContext.computed.itemHeight}px`,
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
            labelWidth={styleContext.colorLabelWidth}
            inputWidth={styleContext.colorInputWidth}
            value={redState}
            decimals={0}
            onChange={handleChangeRed.bind(this)}
          />
          <ColorRange
            label='Green'
            labelWidth={styleContext.colorLabelWidth}
            inputWidth={styleContext.colorInputWidth}
            value={greenState}
            onChange={handleChangeGreen.bind(this)}
          />
          <ColorRange
            label='Blue'
            labelWidth={styleContext.colorLabelWidth}
            inputWidth={styleContext.colorInputWidth}
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
