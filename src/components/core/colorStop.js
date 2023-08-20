'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, createRef } from 'react';
import { StyleContext } from '../styleContext';

export default function ColorStop({selected, stop, red, green, blue, index, onChange, onFinishChange, onClick}) {
  const styleContext = useContext(StyleContext);

  const svgRef = createRef();

  const selectScale = selected ? 1.25 : 1;
  const s = styleContext.computed.fontHeight / 58 * selectScale;
  const border = styleContext.label.fontColor;

  const handleMouseDown = (event) => {
    if (event.target !== svgRef.current) {
      return;
    }

    event.preventDefault();

    let field = svgRef.current.parentNode;
    let fieldRect = field.getBoundingClientRect();

    let onMouseMove = function(mouseMoveEvent) {
      let x = mouseMoveEvent.pageX - fieldRect.left;
      let stop = x / fieldRect.width;
      stop = Math.max(0, Math.min(1, stop));

      if (onChange) {
        onChange({
          index,
          stop: stop
        });
      }
    }.bind(this);

    window.addEventListener('mousemove', onMouseMove);

    let onMouseUp = function() {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)

      if (onFinishChange) {
        onFinishChange();
      }
    }.bind(this);
    window.addEventListener('mouseup', onMouseUp);

    if (onClick) {
      onClick({
        index
      });
    }
  }

  return (
    <svg
      ref={ svgRef }
      width={`${58 * s}px`}
      height={`${87 * s}px`}
      onMouseDown={handleMouseDown}
      style={{
        left: `${stop * (styleContext.controlWidth) - selectScale * styleContext.computed.fontHeight / 2 }px`,
        position: 'absolute',
        cursor: 'pointer',
      }}
    >
      <g transform={`scale(${s})`}>
        <g transform='translate(4, 9)'>
          <path
            d='M0 25 L0 75 L50 75 L50 25 L25 0 Z'
            fill={`rgb(${red}, ${green}, ${blue})`}
            stroke={border}
            strokeWidth='4'
          />
        </g>
      </g>
    </svg>
  );
}

ColorStop.propTypes = {
  selected: PropTypes.bool,
  stop: PropTypes.number,
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
  onClick: PropTypes.func,
};

ColorStop.defaultProps = {
  selected: false,
  stop: 0,
  red: 0,
  green: 0,
  blue: 0,
}

ColorStop.contextTypes = {
  styleContext: PropTypes.object,
};
