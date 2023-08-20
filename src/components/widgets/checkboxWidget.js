'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import Row from '../core/row';
import Label from '../core/label';
import Control from '../core/control';
import { StyleContext } from '../styleContext';

/*
  static getDerivedStateFromProps(props, state) {
    if (props.checked !== state.checked) {
      return {
        checked: state.checked
      };
    }
    return null;
  }
*/

export default function CheckboxWidget({checked, label, onChange, onFinishChange}) {
  const [checkedState, setChecked] = useState(checked);

  const style = useContext(StyleContext);

  const handleClick = () => {
    setChecked(!checkedState);
    if (onChange) {
      onChange(!checkedState);
    }
    if (onFinishChange) {
      onFinishChange(!checkedState);
    }
  }

  return (
    <Row>
    <Label>{label}</Label>
    <Control>
      <svg
        width={`${style.computed.fontHeight}`}
        height={`${style.computed.fontHeight}`}
        onClick={handleClick.bind(this)}
        style={{
          cursor: 'pointer',
        }}
      >
        <g transform={`scale(${style.computed.fontHeight/100})`}>
          <rect className="shape" x="0" y="0" width="100" height="100" fill={style.lowlight}></rect>
          {checkedState && <path
            transform='translate(18.75 50)'
            d="M0 0 L25 25 L62.5 -32.5"
            stroke={style.highlight}
            strokeWidth='15'
            fill='none'
          />}
        </g>
      </svg>
    </Control>
  </Row>
  );
}

CheckboxWidget.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
};

CheckboxWidget.defaultProps = {
  checked: false,
}

CheckboxWidget.contextTypes = {
  style: PropTypes.object
};
