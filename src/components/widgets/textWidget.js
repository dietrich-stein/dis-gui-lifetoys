'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { StyleContext } from '../styleContext';
import Row from '../core/row';
import Label from '../core/label';
import Control from '../core/control';

/*
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
*/

export default function TextWidget({readOnly, value, label, onChange, onFinishChange}) {
  const [valueState, setValue] = useState(value);

  const styleContext = useContext(StyleContext);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  }

  const onKeyDownEvent = (event) => {
    if(e.which === 13) {
      if (onFinishChange) {
        onFinishChange(event.target.value);
      }
    }
  }

  const onBlurEvent = (event) => {
    if (onFinishChange) {
      onFinishChange(event.target.value);
    }
  }

  return (
    <div style={{
    }}>
      <Row>
        <Label>{label}</Label>
        <Control>
          <input
            type='text'
            value={valueState}
            readOnly={ readOnly }
            onChange={handleChange.bind(this)}
            onBlur={onBlurEvent.bind(this)}
            onKeyDown={onKeyDownEvent.bind(this)}
            style={{
              color: (!readOnly) ? styleContext.highlight : styleContext.readOnly,
              font: styleContext.font,
              backgroundColor: styleContext.lowlight,
              padding: `${styleContext.paddingY}px ${styleContext.paddingX}px`,
              width: '100%',
              border: 'none',
              outline: 'none',
            }}>
          </input>
        </Control>
      </Row>
    </div>
  );
}

TextWidget.propTypes = {
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
}

/*TextWidget.contextTypes = {
  styleContext: PropTypes.object,
}*/
