'use strict';

import PropTypes from 'prop-types';
import React, { useContext, useMemo, useCallback, useEffect, useState, createRef } from 'react';
import { StyleContext } from '../styleContext';
//import { flushSync } from 'react-dom';

const X_POSITION = 0;

export default function RangedDraggable({children, height, width}) {
  const [state, setState] = useState({
    isDragging: false,
    xPosition: X_POSITION,
    translation: X_POSITION
  })

  const containerRef = createRef();
  const style = useContext(StyleContext);

  const memoStyles = useMemo(() => ({
    //borderBottom: style.separator,

    //backgroundColor: style.backgroundColor,
    backgroundColor: `rgb(255,255,0)`,
    //padding: `${style.paddingY}px ${style.paddingX}px`,
    width: width,
    height: height,
    //boxSizing: 'border-box',
    //display: 'flex',
    //flexFlow: 'row wrap',
    //alignItems: 'center',

    cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
    transform: `translate(${state.translation}px, 0px)`,
    transition: state.isDragging ? 'none' : 'transform 500ms',
    zIndex: state.isDragging ? 2 : 1,
    position: state.isDragging ? 'absolute' : 'relative',
  }), [state.isDragging, state.translation]);

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState(state => ({
      ...state,
      isDragging: true,
      xPosition: clientX,
    }));
  }, []);

  const handleMouseMove = useCallback(({ clientX, clientY }) => {
    const maxLeft = -10;
    const maxRight = 10;
    let newPosition = (containerRef.current)
      ? clientX - containerRef.current.getBoundingClientRect().left - state.xPosition
      : clientX - state.xPosition;
    newPosition = Math.min(maxRight, Math.max(maxLeft, newPosition));
    console.log('rangedDraggable, handleMouseMove, newPosition: ', newPosition);
    //flushSync(() => {
    //const translation = clientX - state.xPosition;
    setState(state => ({
      ...state,
      translation: newPosition,
    }));
    //});
  }, [state.xPosition]);

  const handleMouseUp = useCallback(({ clientX, clientY }) => {
    //flushSync(() => {
    setState(state => ({
      ...state,
      isDragging: false,
    }));
    //});
  }, []);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      setState({ ...state, translation: X_POSITION});
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div ref={containerRef} style={memoStyles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
}

RangedDraggable.contextTypes = {
  style: PropTypes.object
}
