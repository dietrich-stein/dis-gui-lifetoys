'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from '../../StyleContext';

export default function Control({ children }) {
  const style = useContext(StyleContext);

  return (
    <div style={{
      width: `${style.controlWidth}px`,
    }}>
      {children}
    </div>
  );
}

Control.contextTypes = {
  style: PropTypes.object
}
