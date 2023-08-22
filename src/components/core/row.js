'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from '../styleContext';

export default function Row({ children }) {
  const styleContext = useContext(StyleContext);

  return (
    <div style={{
      borderBottom: styleContext.separator,
      backgroundColor: styleContext.backgroundColor,
      minHeight: styleContext.computed.minRowHeight,
      padding: `${styleContext.paddingY}px ${styleContext.paddingX}px`,
      boxSizing: 'border-box',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
    }}>
      {children}
    </div>
  );
}
