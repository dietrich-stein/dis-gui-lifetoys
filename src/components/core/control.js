'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from '../styleContext';

export default function Control({ children }) {
  const styleContext = useContext(StyleContext);

  return (
    <div style={{
      width: `${styleContext.controlWidth}px`,
    }}>
      {children}
    </div>
  );
}
