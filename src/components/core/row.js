'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from '../styleContext';

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

Row.contextTypes = {
  style: PropTypes.object
}
