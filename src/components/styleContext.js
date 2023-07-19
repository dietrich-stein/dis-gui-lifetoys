import { createContext } from 'react';

export const defaultStyle = {
  labelWidth: 96,
  controlWidth: 192,
  paddingY: 3,
  paddingX: 3,
  highlight: '#0FA',
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