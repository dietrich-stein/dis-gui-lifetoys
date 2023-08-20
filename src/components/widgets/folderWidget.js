'use strict';

import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import merge from 'lodash.merge';
import cloneDeep from 'lodash.clonedeep';
import Row from '../core/row';
import { StyleContext } from '../styleContext';

/*
  static getDerivedStateFromProps(props, state) {
    if (props.expanded !== state.expanded) {
      return {
        expanded: state.expanded
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expanded !== expanded) {
      subscriptionsState.forEach(fn => fn(expanded));
    }
  }

  const getChildContext = () => {
    return merge(cloneDeep(this.context), {
      style: {
        labelWidth: style.labelWidth - 4,
      },
      folder: {
        subscribe: (fn) => {
          this.subscribe(fn);
          return () => this.unsubscribe(fn);
        }
      }
    });
  };
*/
export default function FolderWidget({ children, expanded, label, onChange, onFinishChange }) {
  const [expandedState, setExpanded] = useState(expanded);
  const [subscriptionsState, setSubscriptionsState] = useState([]);

  const style = useContext(StyleContext);

  const subscribe = (fn) => {
    subscriptionsState.push(fn)
  };
  const unsubscribe = (fn) => {
    subscriptionsState.splice(subscriptionsState.indexOf(fn), 1);
  };

  const handleClick = (e) => {
    setExpanded(!expandedState);
    if (onChange) {
      onChange(expandedState);
    }
    if (onFinishChange) {
      onFinishChange(expandedState);
    }
  };

  return (
    <div style={{
      backgroundColor: style.backgroundColor,
    }}>
      <div
        style={{
          color: style.label.fontColor,
          font: style.font,
          fontWeight: style.label.fontWeight,
          padding: `${style.paddingY}px ${style.paddingX}px`,
          borderBottom: style.separator,
          cursor: 'pointer',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
        }}
        onClick={handleClick.bind(this)}
      >
        <div
          style={{
            padding: `${style.paddingY}px ${style.paddingX}px`,
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
          }}
        >

          {label}

          <svg
            width={`${style.computed.fontHeight * 0.75}`}
            height={`${style.computed.fontHeight * 0.75}`}
            style={{
              display: expandedState ? 'none' : 'inline-block',
              marginLeft: style.paddingX,
            }}
          >
            <g transform={`scale(${style.computed.fontHeight * 0.75/100})`}>
              <polygon className='shape' points='25,0 75,50 25,100' fill={style.label.fontColor}></polygon>
            </g>
          </svg>

          <svg
            width={`${style.computed.fontHeight * 0.75}`}
            height={`${style.computed.fontHeight * 0.75}`}
            style={{
              display: expandedState ? 'inline-block' : 'none',
              marginLeft: style.paddingX,
            }}
          >
            <g transform={`scale(${style.computed.fontHeight * 0.75/100})`}>
              <polygon className='shape' points='0,25 50,75 100,25' fill={style.label.fontColor}></polygon>
            </g>
          </svg>

        </div>
      </div>
      <div
        style={{
          borderLeft: `4px solid ${style.lowlight}`,
          display: `${expandedState ? 'block' : 'none'}`
        }}
      >
        {children}
      </div>
    </div>
  );
}

FolderWidget.propTypes = {
  expanded: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
};

FolderWidget.defaultProps = {
  expanded: false,
};

FolderWidget.contextTypes = {
  style: PropTypes.object
};
