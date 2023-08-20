'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, createRef } from 'react';
import { StyleContext } from '../styleContext';

export default function ColorStop({selected, stop, red, green, blue, index, onChange, onFinishChange, onClick}) {
  const style = useContext(StyleContext);

  const stopRef = createRef();

  const selectScale = selected ? 1.25 : 1;
  const s = style.computed.fontHeight / 58 * selectScale;
  const border = style.label.fontColor;

  const handleMouseDown = (e) => {
    e.preventDefault();
    let field = this.stopRef.current.parentNode;
    let fieldRect = field.getBoundingClientRect();
    let onMouseMove = function(e) {
      let x = e.pageX - fieldRect.left;
      let stop = x/fieldRect.width;
      stop = Math.max(0, Math.min(1, stop));
      this.props.onChange({
        index: this.props.index,
        stop: stop
      });
    }.bind(this);
    let onMouseUp = function() {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      this.props.onFinishChange();
    }.bind(this)
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    this.props.onClick({
      index: this.props.index,
    });
  }

  return (
    <svg
      ref={ stopRef }
      width={`${58 * s}px`}
      height={`${87 * s}px`}
      onMouseDown={handleMouseDown.bind(this)}
      style={{
        left: `${stop * (style.controlWidth) - selectScale * style.computed.fontHeight/2}px`,
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
  style: PropTypes.object,
};
