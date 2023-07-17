'use strict';

import PropTypes from 'prop-types';
import React, { useState }  from 'react';
import merge from 'lodash.merge';
import {Row, Control} from './components';
import { StyleContext, defaultStyle } from '../StyleContext';

export default function GUI({ style, expanded, alwaysOpen, className, children }) {
  const [expandedState, setExpanded] = useState(expanded);

  let mergedStyle = merge(JSON.parse(JSON.stringify(defaultStyle)), style);
  mergedStyle.computed = {};
  mergedStyle.computed.fontHeight = calculateFontHeight(mergedStyle.font);
  mergedStyle.computed.itemHeight = mergedStyle.computed.fontHeight + mergedStyle.paddingY * 2;
  mergedStyle.computed.minRowHeight = mergedStyle.computed.itemHeight + mergedStyle.paddingY * 2;

  const noSelectStyle = {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    MozAppearance: 'none',
  }

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
    /*
      <div style={style} className={this.props.className}>
        <div style={{display: this.state.expanded ? 'block' : 'none'}}>
          {this.props.children}
        </div>
        {!this.props.alwaysOpen &&
          <Row>
            <div
              onClick={this.handleCloseControls.bind(this)}
              style={{
                font: this.style.font,
                color: this.style.label.fontColor,
                textAlign: 'center',
                width: this.style.labelWidth + this.style.controlWidth + 2 * this.style.paddingX,
                cursor: 'pointer',
              }}
            >
              <span style={noSelect}>{expandText}</span>
            </div>
          </Row>
        }
      </div>
    */
  return (
    <StyleContext.Provider value={mergedStyle}>
      <div style={renderStyle} className={className}>
        {children}
      </div>
    </StyleContext.Provider>
  );
}


//export default class GUI extends React.PureComponent {

  /*constructor(props) {
    super(props);
    this.style = merge(JSON.parse(JSON.stringify(defaultStyle)), this.props.style);
    this.style.computed = {};
    this.style.computed.fontHeight = calculateFontHeight(this.style.font);
    this.style.computed.itemHeight = this.style.computed.fontHeight + this.style.paddingY * 2;
    this.style.computed.minRowHeight = this.style.computed.itemHeight + this.style.paddingY * 2;
    this.state = {
      expanded: this.props.expanded
    }
  }*/

  /*static getDerivedStateFromProps(props, state) {
    if (props.expanded !== state.expanded) {
      return {
        expanded: state.expanded | props.alwaysOpen
      };
    }
    return null;
  }*/

  /*render() {
    let noSelect = {
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      MozAppearance: 'none',
    }
    let style = {
      position: 'fixed',
    };
    if (this.style.right !== undefined) {
      style.right = this.style.right;
    } else if (this.style.left !== undefined) {
      style.left = this.style.left;
    } else {
      style.right = '8px';
    }
    if (this.style.top !== undefined) {
      style.top = this.style.top;
    } else if (this.style.bottom !== undefined) {
      style.bottom = this.style.bottom;
    } else {
      style.top = '0px';
    }
    const expandText = this.state.expanded ? 'Close Controls' : 'Open Controls'
    return (
      <div style={style} className={this.props.className}>
        <div style={{display: this.state.expanded ? 'block' : 'none'}}>
          {this.props.children}
        </div>
        {!this.props.alwaysOpen &&
          <Row>
            <div
              onClick={this.handleCloseControls.bind(this)}
              style={{
                font: this.style.font,
                color: this.style.label.fontColor,
                textAlign: 'center',
                width: this.style.labelWidth + this.style.controlWidth + 2 * this.style.paddingX,
                cursor: 'pointer',
              }}
            >
              <span style={noSelect}>{expandText}</span>
            </div>
          </Row>
        }
      </div>
    )
  }

  getChildContext() {
    return {
      style: this.style,
    }
  }

  handleCloseControls() {
    this.setState({
      expanded: !this.state.expanded
    });
  }*/
//}

GUI.propTypes = {
  style: PropTypes.object,
  expanded: PropTypes.bool,
  alwaysOpen: PropTypes.bool,
  className: PropTypes.string
};

GUI.defaultProps = {
  expanded: true,
  alwaysOpen: false
}

/*GUI.childContextTypes = {
  style: PropTypes.object,
};*/

function calculateFontHeight(font) {
  let div = document.createElement('div');
  div.style.font = font;
  div.style.overflow = 'hidden';
  div.style.whiteSpace = 'nowrap';
  div.innerHTML = '~!@#$%^&*()_+`1234567890-=QWERTYUIOP{}|qwertyuiop[]\\ASDFGHJKL:"asdfghjkl;\'ZXCVBNM<>?zxcvbnm,./';
  document.body.appendChild(div);
  let height = div.clientHeight;
  document.body.removeChild(div);
  return height;
}
