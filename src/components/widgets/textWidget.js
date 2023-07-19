'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { StyleContext } from '../styleContext';
import Row from '../row';
import Label from '../label';
import Control from '../control';

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

  const style = useContext(StyleContext);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  }

  const onKeyDownEvent = (e) => {
    if(e.which === 13) {
      if (onFinishChange) {
        onFinishChange(e.target.value);
      }
    }
  }

  const onBlurEvent = (e) => {
    if (onFinishChange) {
      onFinishChange(e.target.value);
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
              color: (!readOnly) ? style.highlight : style.readOnly,
              font: style.font,
              backgroundColor: style.lowlight,
              padding: `${style.paddingY}px ${style.paddingX}px`,
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

TextWidget.contextTypes = {
  style: PropTypes.object
}
