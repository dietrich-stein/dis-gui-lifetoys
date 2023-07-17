'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from '../../StyleContext';

export default function Row({ children }) {
  const style = useContext(StyleContext);

  return (
    <div style={{
      borderBottom: style.separator,
      backgroundColor: style.backgroundColor,
      minHeight: style.computed.minRowHeight,
      padding: `${style.paddingY}px ${style.paddingX}px`,
      boxSizing: 'border-box',
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
    }}>
      {children}
    </div>
  );
}

/*
export default class Row extends React.PureComponent {
  render() {
    return (
      <div style={{
             borderBottom: this.context.style.separator,
             backgroundColor: this.context.style.backgroundColor,
             minHeight: this.context.style.computed.minRowHeight,
             padding: `${this.context.style.paddingY}px ${this.context.style.paddingX}px`,
             boxSizing: 'border-box',
             display: 'flex',
             flexFlow: 'row wrap',
             alignItems: 'center',
           }}>
        {this.props.children}
      </div>
    )
  }
}
*/
Row.contextTypes = {
  style: PropTypes.object
}
