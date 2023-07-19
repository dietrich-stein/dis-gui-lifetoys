'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from './styleContext';

export default function Label({ children }) {
  const style = useContext(StyleContext);

  return (
    <div style={{
      width: style.labelWidth,
      font: style.font,
      fontWeight: style.label.fontWeight,
      padding: `${style.paddingY}px ${style.paddingX}px`,
      color: style.label.fontColor,
      cursor: 'default',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none'
    }}>
      {children}
    </div>
  );
}

Label.contextTypes = {
  style: PropTypes.object
}
