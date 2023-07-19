'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, createRef, useEffect } from 'react';
import { StyleContext } from './styleContext';
import useSetStateCallback from '../hooks/useSetStateCallback';
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
export default function RangeSlider({value, min, max, step, width, onChange, onFinishChange}) {
  const [valueState, setValue] = useSetStateCallback(value);
  const [draggingState, setDragging] = useSetStateCallback(false);
  const [pageXState, setPageX] = useSetStateCallback(-1);

  const style = useContext(StyleContext);

  const containerRef = createRef();
  const trackRef = createRef();
  const thumbRef = createRef();

  useEffect(() => {
    //setValue(valueState);
    //updateThumb();
    if (pageXState > -1) {
      updateThumb('useEffect via valueState');
    }

    console.log('useEffect, valueState, calling updateLayout()...');
    updateLayout(containerRef.current, trackRef.current, thumbRef.current);

  }, [valueState]);

  useEffect(() => {
    //setValue(valueState);
    //updateThumb();
    if (pageXState > -1) {
      updateThumb('useEffect via valueState');
    }

    console.log('useEffect, pageXState, calling updateLayout()...');
    updateLayout(containerRef.current, trackRef.current, thumbRef.current);
  }, [valueState]);

  useEffect(() => {
    console.log('useEffect, draggingState');
    updateThumb('useEffect via draggingState');
  }, [draggingState]);

  const handleContainerMouseEnter = () => {
    setDragging(false, () => {
      setPageX(-1);
    });
  }

  const handleContainerMouseLeave = () => {
    setDragging(false, () => {
      setPageX(-1);
    });
  }

  const handleContainerMouseDown = (e) => {
    e.preventDefault();
    setDragging(true, () => {
      setPageX(e.pageX, () => {
        //setTimeout(() => {
          updateThumb(/*e.pageX,*/'DOWN');//.bind(this);
        //}).bind(this);
      });//.bind(this);
    });//.bind(this);
  };

  const handleContainerMouseUp = (e) => {
    setDragging(false, () => {
      setPageX(e.pageX, () => {
        //setTimeout(() => {
          updateThumb(/*e.pageX,*/'UP');
        //}).bind(this);
        if (onFinishChange) {
          onFinishChange(valueState);
        }
      });//.bind(this);
    });//.bind(this);
  }

  const handleContainerMouseMove = (e) => {
    if (draggingState) {
      setPageX(e.pageX, () => {
        //setTimeout(() => {
        updateThumb(/*e.pageX,*/'MOVE');//.bind(this);
        //}).bind(this);
      });//.bind(this);
    }
  }

  const updateLayout = (container, track, thumb) => {
    //let container = containerRef.current;
    let cHeight = container.clientHeight;
    let cWidth = container.clientWidth;

    //let track = trackRef.current;
    track.style.top = `${cHeight/2 - 0.5}px`;

    //let thumb = thumbRef.current;
    let thumbSize = style.computed.fontHeight * 0.9;
    thumb.style.top = `${style.computed.itemHeight / 2 - thumbSize / 2}px`;

    let frac = (valueState - min) / (max - min);
    console.log('RangeSlider.updateLayout, valueState:', valueState, 'container:', container, 'frac:', frac);
    let left = frac * cWidth - thumbSize / 2;
    left = Math.max(left, 0);
    left = Math.min(left, cWidth - thumbSize);

    thumb.style.left = `${left}px`;
    thumb.style.width = `${thumbSize}px`;
    thumb.style.height = `${thumbSize}px`;
  }

  const updateThumb = (/*pageX, */via) => {
    const container = containerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!container || !track || !thumb) {
      console.log('NO REF!!!, RangeSlider.moveThumb, via:', via, 'container:', container, 'track:', track, 'thumb:', thumb);
      return;
    }

    let cWidth = container.clientWidth;
    let thumbSize = style.computed.fontHeight * 0.9;

    //let xPos = pageX - container.getBoundingClientRect().left;
    let xPos = pageXState - container.getBoundingClientRect().left;

    let frac = 0;
    if (xPos < thumbSize / 2) {
      frac = 0;
    } else if (xPos > cWidth - thumbSize / 2) {
      frac = 1;
    } else {
      frac = (xPos - thumbSize / 2) / (cWidth - thumbSize);
    }

    let newValue = frac * (max - min) + min;

    if (step !== undefined) {
      let steps = [];
      let stepVal = min;
      while(stepVal < max) {
        steps.push(stepVal);
        stepVal += step;
      }
      steps.push(max);

      let minStepVal = steps[0];
      for (let i = 0; i < steps.length; i++) {
        let currentStepVal = steps[i];
        let minStepDiff = Math.abs(minStepVal - newValue);
        let currentStepDiff = Math.abs(currentStepVal - newValue);
        if (currentStepDiff < minStepDiff) {
          minStepVal = currentStepVal;
        }
      }
      newValue = minStepVal;
    }
    console.log('RangeSlider.moveThumb, via:', via, 'value:', newValue, 'max:', max, 'min', min, 'valueState:', valueState, 'xPos:', xPos, 'pageX:', pageXState);
    setValue(newValue, () => {
      console.log('updateThumb() CALLBACK!', container, trackRef.current, thumbRef.current);
      updateLayout(container, track, thumb);
      if (onChange) {
        onChange(newValue);
      }
    });
  };

  /*
  const onMouseDownEvent = (e) => {
    e.preventDefault();
    //setPageX(e.pageX);
    updateThumb(e.pageX);
    //moveThumb(e.pageX);

    let onMouseMove = function(e) {
      //setPageX(e.pageX);
      console.log('onMouseMove', containerRef.current)
      updateThumb(e.pageX);
      //moveThumb(e.pageX);
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
  */
  // container: onMouseDown={onMouseDownEvent.bind(this)}
  return (
    <div
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
      onMouseMove={handleContainerMouseMove}
      onMouseDown={handleContainerMouseDown}
      onMouseUp={handleContainerMouseUp}
      ref={ containerRef }
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

RangeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  width: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
}

RangeSlider.defaultProps = {
  width: '100%',
};

RangeSlider.contextTypes = {
  style: PropTypes.object,
  folder: PropTypes.shape({
    subscribe: PropTypes.func
  }),
}
