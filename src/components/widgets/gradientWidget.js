'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext, createRef, useEffect } from 'react';
import { StyleContext } from '../styleContext.js';
import Row from '../core/row';
import Label from '../core/label';
import Control from '../core/control';
import ColorRange from '../core/colorRange';
import ColorStop from '../core/colorStop.js';

export default function GradientWidget({expanded, stops, label, onChange, onFinishChange}) {
  const [expandedState, setExpanded] = useState(expanded);
  const [stopsState, setStops] = useState(stops);
  const [stopIndexState, setSelectedStop] = useState(0);

  const styleContext = useContext(StyleContext);

  const canvasRef = createRef();
  const stopfieldRef = createRef();

  useEffect(() => {
    updateCanvas();
  });

  const handleStopFieldMouseDown = (event) => {
    const el = event.target.closest('div');
    if (el !== stopfieldRef.current) {
      return;
    }

    let updatedStops = stopsState.slice();
    let rect = event.target.getBoundingClientRect();
    let newStop = (event.pageX - rect.left)/rect.width;
    let c = getGradientValue(getCleanStops(), newStop);

    updatedStops.push({
      stop: newStop,
      red: c.red,
      green: c.green,
      blue: c.blue
    });
    setStops(updatedStops);
    setSelectedStop(updatedStops.length - 1);
    handleChange();
    handleFinishChange()
  };

  const handleRemoveStop = () => {
    let updatedStops = stopsState.slice();
    if (updatedStops.indexOf(stopIndexState) > -1) {
      updatedStops.splice(stopIndexState, 1);
      setStops(updatedStops);
      setSelectedStop(0);
    }
    handleChange();
    handleFinishChange()
  };

  const handleChangeRed = (value) => {
    let updatedStops = stops.slice();
    if (updatedStops.indexOf(stopIndexState) > -1) {
      updatedStops[stopIndexState].red = parseInt(value);
      setStops(updatedStops);
    }
    handleChange();
  };

  const handleChangeGreen = (value) => {
    let updatedStops = stops.slice();
    if (updatedStops.indexOf(stopIndexState) > -1) {
      updatedStops[stopIndexState].green = parseInt(value);
      setStops(updatedStops);
    }
    handleChange();
  };

  const handleChangeBlue = (value) => {
    let updatedStops = stops.slice();
    if (updatedStops.indexOf(stopIndexState) > -1) {
      updatedStops[stopIndexState].blue = parseInt(value);
      setStops(updatedStops);
    }
    handleChange();
  };

  const handleChange = () => {
    if (onChange) {
      onChange(getCleanStops());
    }
  };

  const handleFinishChange = () => {
    if (onFinishChange) {
      onFinishChange(getCleanStops());
    }
  };

  const handleCanvasClick = () => {
    setExpanded(!expandedState);
  };

  const handleStopChange = (event) => {
    console.log('handleStopChange(), event:', event);
    let updatedStops = stopsState.slice();
    if (updatedStops.indexOf(event.index) > -1) {
      updatedStops[event.index].stop = event.stop;
      setStops(updatedStops);
    }
    handleChange();
  };

  const handleStopClick = (event) => {
    console.log('handleStopClick(), event.index:', event.index);
    setSelectedStop(event.index);
  };

  const getCleanStops = () => {
    if (!stops) {
      return [];
    }
    // Returns stops, bounded to [0..1] and sorted.
    let cleanStops = stopsState.slice();
    cleanStops.sort(function(a, b) {
      return a.stop - b.stop;
    });
    if (cleanStops[0].stop > 0) {
      cleanStops.unshift({
        stop: 0,
        red: cleanStops[0].red,
        green: cleanStops[0].green,
        blue: cleanStops[0].blue
      });
    }
    let lastStop = cleanStops[cleanStops.length - 1];
    if (lastStop.stop < 1) {
      cleanStops.push({
        stop: 1,
        red: lastStop.red,
        green: lastStop.green,
        blue: lastStop.blue
      });
    }
    return cleanStops;
  }

  const getGradientValue = (cleanStops, frac) => {
    for (let i = 0; i < cleanStops.length - 1; i++) {
      if (frac >= cleanStops[i].stop && frac <= cleanStops[i + 1].stop) {
        let left = cleanStops[i];
        let right = cleanStops[i + 1];
        let ifrac = (frac - left.stop)/(right.stop - left.stop);
        return {
          red: Math.round(left.red + ifrac * (right.red - left.red)),
          green: Math.round(left.green + ifrac * (right.green - left.green)),
          blue: Math.round(left.blue + ifrac * (right.blue - left.blue)),
        }
      }
    }
    throw ('Error calculating gradient value.');
  }

  const updateCanvas = () => {
    let stops = getCleanStops()
    let canvas = canvasRef.current;
    canvas.width = 512;
    canvas.height = 1;
    let ctx = canvas.getContext('2d');
    for (var x = 0; x < canvas.width; x++) {
      let frac = x/(canvas.width - 1);
      let c = getGradientValue(stops, frac);
      ctx.fillStyle = `rgb(${c.red}, ${c.green}, ${c.blue})`;
      ctx.fillRect(x, 0, 1, 1);
    }
  }

  return (
    <Row>
      <Label>{label + ' (' + stopIndexState + '/' + stopsState.length + ')'}</Label>
      <Control>
        <canvas
          ref={ canvasRef }
          onClick={handleCanvasClick.bind(this)}
          style={{
            width: `${styleContext.controlWidth}px`,
            position: 'relative',
            height: `${styleContext.computed.itemHeight}px`,
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            cursor: 'pointer',
          }}
        ></canvas>
        { expandedState &&
          <div>
            <div
              ref={ stopfieldRef }
              onMouseDown={ handleStopFieldMouseDown.bind(this) }
              style={{
                width: `${styleContext.controlWidth}px`,
                height: `${styleContext.computed.fontHeight*1.875}px`,
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {
              // Must not use stopsState here or else colors on stops don't
              stops.map((stop, index) => {
                return (
                  <ColorStop
                    key={'stop' + index}
                    index={index}
                    stop={stop.stop}
                    red={stop.red}
                    green={stop.green}
                    blue={stop.blue}
                    selected={index === stopIndexState}
                    onClick={handleStopClick.bind(this)}
                    onChange={handleStopChange.bind(this)}
                    onFinishChange={handleFinishChange.bind(this)}
                  />
                )
              })
              }
            </div>
            { //
              stops.length > 1 && stops.indexOf(stopIndexState) > -1 &&
              <>
                <ColorRange
                  label='Red'
                  value={stops[stopIndexState].red}
                  onChange={handleChangeRed.bind(this)}
                  onFinishChange={handleFinishChange.bind(this)}
                />
                <ColorRange
                  label='Green'
                  value={stops[stopIndexState].green}
                  onChange={handleChangeGreen.bind(this)}
                  onFinishChange={handleFinishChange.bind(this)}
                />
                <ColorRange
                  label='Blue'
                  value={stops[stopIndexState].blue}
                  onChange={handleChangeBlue.bind(this)}
                  onFinishChange={handleFinishChange.bind(this)}
                />
                <div
                  onClick={handleRemoveStop}
                  style={{
                    backgroundColor: styleContext.lowlight,
                    color: styleContext.highlight,
                    font: styleContext.font,
                    padding: `${styleContext.paddingY}px 0px`,
                    marginTop: `${styleContext.paddingY}px`,
                    textAlign: 'center',
                    cursor: 'pointer',
                    width: '100%',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    userSelect: 'none',
                  }}
                >
                  Remove Stop
                </div>
              </>
            }
          </div>
        }
      </Control>
    </Row>
  );
}

GradientWidget.propTypes = {
  expanded: PropTypes.bool,
  stops: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
};

GradientWidget.defaultProps = {
  expanded: false,
  stops: [
    {red: 255, green: 0, blue: 0, stop: 0.125},
    {red: 255, green: 255, blue: 0, stop: 0.5},
    {red: 255, green: 255, blue: 255, stop: 0.875},
  ],
};
