'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from '../styleContext';

export default function Label({ children }) {
  const styleContext = useContext(StyleContext);

  return (
    <div style={{
      width: styleContext.labelWidth,
      font: styleContext.font,
      fontWeight: styleContext.label.fontWeight,
      padding: `${styleContext.paddingY}px ${styleContext.paddingX}px`,
      color: styleContext.label.fontColor,
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

/*Label.contextTypes = {
  styleContext: PropTypes.object,
}*/
