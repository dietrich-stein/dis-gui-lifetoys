import { createContext } from 'react';

// In gui.js this is merged with:
//   mergedStyle = merge(JSON.parse(JSON.stringify(defaultStyle)), style);
//
// Then, it is applied as a provider:
//   <StyleContext.Provider value={mergedStyle}></StyleContext.Provider>

export const defaultStyle = {
  labelWidth: 96,
  colorLabelWidth: '20%', // relative to 100% of controlWidth
  colorRangeWidth: '70%', // relative to 80% of controlWidth
  colorInputWidth: '30%', // relative to 80% of controlWidth
  controlWidth: 192,
  paddingY: 3,
  paddingX: 3,
  highlight: '#0FA',
  medlight: '#063',
  readOnly: '#999',
  lowlight: '#444',
  lowlighterr: '#822',
  font: '11px Arial',
  backgroundColor: '#1A1A1A',
  separator: '1px solid #333',
  label: {
    fontColor: '#FFF',
    fontWeight: 'normal',
  },
};

export const StyleContext = createContext(null);