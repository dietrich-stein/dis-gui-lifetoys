'use strict';

import PropTypes from 'prop-types';
import React, { useState }  from 'react';
import merge from 'lodash.merge';
import Row from './core/row'
import { StyleContext, defaultStyle } from './styleContext';

/*
  static getDerivedStateFromProps(props, state) {
    if (props.expanded !== state.expanded) {
      return {
        expanded: state.expanded | props.alwaysOpen
      };
    }
    return null;
  }
  getChildContext() {
    return {
      style: this.style,
    }
  }
*/

export default function GUI({ style, expanded, alwaysOpen, className, children }) {
  const [expandedState, setExpanded] = useState(expanded);

  const calculateFontHeight = (font) => {
    let div = document.createElement('div');
    div.style.font = font;
    div.style.overflow = 'hidden';
    div.style.whiteSpace = 'nowrap';
    div.innerHTML = '~!@#$%^&*()_+`1234567890-=QWERTYUIOP{}|qwertyuiop[]\\ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./';

    document.body.appendChild(div);
    let height = div.clientHeight;
    document.body.removeChild(div);

    return height;
  };

  let mergedStyle = merge(JSON.parse(JSON.stringify(defaultStyle)), style);
  mergedStyle.computed = {};
  mergedStyle.computed.fontHeight = calculateFontHeight(mergedStyle.font);
  mergedStyle.computed.itemHeight = mergedStyle.computed.fontHeight + mergedStyle.paddingY * 2;
  mergedStyle.computed.minRowHeight = mergedStyle.computed.itemHeight + mergedStyle.paddingY * 2;

  let renderStyle = {
    position: 'fixed',
  };
  if (mergedStyle.right !== undefined) {
    renderStyle.right = mergedStyle.right;
  } else if (mergedStyle.left !== undefined) {
    renderStyle.left = mergedStyle.left;
  } else {
    renderStyle.right = '8px';
  }
  if (mergedStyle.top !== undefined) {
    renderStyle.top = mergedStyle.top;
  } else if (mergedStyle.bottom !== undefined) {
    renderStyle.bottom = mergedStyle.bottom;
  } else {
    renderStyle.top = '0px';
  }

  const noSelectStyle = {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    MozAppearance: 'none',
  }

  const handleCloseControls = () => {
    setExpanded(!expandedState);
  }

  return (
    <StyleContext.Provider value={mergedStyle}>
      <div style={renderStyle} className={className}>
        <div style={{display: expandedState ? 'block' : 'none'}}>
            {children}
          </div>
          {!alwaysOpen &&
            <Row>
              <div
                onClick={handleCloseControls.bind(this)}
                style={{
                  font: mergedStyle.font,
                  color: mergedStyle.label.fontColor,
                  textAlign: 'center',
                  width: mergedStyle.labelWidth + mergedStyle.controlWidth + 2 * mergedStyle.paddingX,
                  cursor: 'pointer',
                }}
              >
                <span style={noSelectStyle}>{expandedState ? 'Close Controls' : 'Open Controls'}</span>
              </div>
            </Row>
          }
      </div>
    </StyleContext.Provider>
  );
}

GUI.propTypes = {
  styleContext: PropTypes.object,
  expanded: PropTypes.bool,
  alwaysOpen: PropTypes.bool,
  className: PropTypes.string
};

GUI.defaultProps = {
  expanded: true,
  alwaysOpen: false
}
