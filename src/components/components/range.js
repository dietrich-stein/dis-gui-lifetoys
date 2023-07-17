'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, createRef, useEffect } from 'react';
import { StyleContext } from '../../StyleContext';

/*
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  componentDidUpdate() {
    this.updateLayout();
  }

  componentDidMount() {
    this.updateLayout();
    if (this.context.folder) {
      this.unsubscribeFolder = this.context.folder.subscribe((expanded) => {
        if (expanded) this.forceUpdate();
      })
    }
  }
  componentWillUnmount() {
    if (this.unsubscribeFolder) this.unsubscribeFolder();
  }
*/

export default function Range({value, min, max, step, width, onChange, onFinishChange}) {
  const [valueState, setValue] = useState(value);

  const style = useContext(StyleContext);

  const containerRef = createRef();
  const trackRef = createRef();
  const thumbRef = createRef();

  useEffect(() => {
    updateLayout();
  });

  const updateLayout = () => {
    let container = containerRef.current;
    let cHeight = container.clientHeight;
    let cWidth = container.clientWidth;
    let track = trackRef.current;
    track.style.top = `${cHeight/2 - 0.5}px`;
    let thumb = thumbRef.current;
    let thumbSize = style.computed.fontHeight * 0.9;
    thumb.style.top = `${style.computed.itemHeight/2 - thumbSize/2}px`;
    let frac = (valueState - min)/(max - min);
    let left = frac * cWidth - thumbSize/2;
    left = Math.max(left, 0);
    left = Math.min(left, cWidth - thumbSize);
    thumb.style.left = `${left}px`;
    thumb.style.width = `${thumbSize}px`;
    thumb.style.height = `${thumbSize}px`;
  }

  const moveThumb = (pageX) => {
    let container = containerRef.current;
    if (!container) {
      return;
    }
    let cWidth = container.clientWidth;
    let thumbSize = style.computed.fontHeight * 0.9;
    let x = pageX - container.getBoundingClientRect().left;
    let frac = 0;
    if (x < thumbSize/2) {
      frac = 0;
    } else if (x > cWidth - thumbSize/2) {
      frac = 1;
    } else {
      frac = (x - thumbSize/2)/(cWidth-thumbSize);
    }
    let value = frac * (max - min) + min;
    if (step !== undefined) {
      let stops = [];
      let x = min;
      while(x < max) {
        stops.push(x);
        x += step;
      }
      stops.push(max);
      let min = stops[0];
      for (let i = 0; i < stops.length; i++) {
        let stop = stops[i];
        let dmin = Math.abs(min - value);
        let dstop = Math.abs(stop - value);
        if (dstop < dmin) {
          min = stop;
        }
      }
      value = min;
    }
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const onMouseDownEvent = (e) => {
    e.preventDefault();
    moveThumb(e.pageX);
    let onMouseMove = function(e) {
      moveThumb(e.pageX);
    }.bind(this);
    let onMouseUp = function() {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      if (onFinishChange) {
        onFinishChange(valueState);
      }
    }.bind(this);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  return (
    <div
      ref={ containerRef }
      onMouseDown={onMouseDownEvent.bind(this)}
      style={{
        width: width,
        height: `${style.computed.itemHeight}px`,
        position: 'relative',
      }}
    >
      <div
        ref={ trackRef }
        style={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          left: '0px',
          backgroundColor: style.lowlight,
        }}
      ></div>
      <div
        ref={ thumbRef }
        style={{
          position: 'absolute',
          backgroundColor: style.lowlight,
          border: `1px solid ${style.highlight}`,
          boxSizing: 'border-box',
          borderRadius: '0px',
          cursor: 'pointer',
        }}
      ></div>
    </div>
  );
}

Range.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  width: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
}

Range.defaultProps = {
  width: '100%',
};

Range.contextTypes = {
  style: PropTypes.object,
  folder: PropTypes.shape({
    subscribe: PropTypes.func
  }),
}
