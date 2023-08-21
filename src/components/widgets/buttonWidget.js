'use strict';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleContext } from '../styleContext';
import Row from '../core/row';
import Label from '../core/label';
import Control from '../core/control';

export default function ButtonWidget({disabled, label, onClick}) {
  const styleContext = useContext(StyleContext);

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  }

  return (
    <Row>
      <Label></Label>
      <Control>
        <div
          onClick={handleClick.bind(this)}
          style={{
            opacity: (disabled) ? 0.5 : 1.0,
            backgroundColor: styleContext.lowlight,
            color: styleContext.highlight,
            font: styleContext.font,
            padding: `${styleContext.paddingY}px ${styleContext.paddingX}px`,
            textAlign: 'center',
            cursor: 'pointer',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          {label}
        </div>
      </Control>
    </Row>
  );
}

ButtonWidget.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

/*ButtonWidget.contextTypes = {
  styleContext: PropTypes.object,
}*/
