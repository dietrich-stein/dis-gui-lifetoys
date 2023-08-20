'use strict';

import React, { useState } from 'react';
import * as dg from '../src/index';
import * as gradientUtils from './gradientUtils';

export default function Demo({
  text,
  textColor,
  noise,
  scale,
  speed,
  gradient,
  translate,
  onChangeText,
  onChangeTextColor,
  onChangeNoise,
  onChangeScale,
  onChangeTranslate,
  onChangeGradient,
  onChangeSpeed
}) {
  const [gradientState, setGradient] = useState(gradient);

  const onClickRandomGradient = () => {
    let newStops = gradientUtils.random();
    setGradient(newStops);
  };

  return (
    <dg.GUI>
      <dg.FolderWidget label='Text' expanded={true}>
        <dg.TextWidget
          label='Value'
          value={text}
          onChange={onChangeText}
        />
        <dg.ColorWidget expanded={true}
          label='Glow Color'
          red={textColor.red}
          green={textColor.green}
          blue={textColor.blue}
          onChange={onChangeTextColor}
        />
      </dg.FolderWidget>
    </dg.GUI>
  );
}
/*
      <dg.FolderWidget label='Background' expanded={true}>
        <dg.SelectWidget
          label='Noise'
          options={['Smooth', 'Fractal']}
          value={noise}
          onChange={onChangeNoise}
        />
        <dg.NumberWidget
          label='Scale'
          min={1}
          max={20}
          value={scale}
          decimals={3}
          onChange={onChangeScale}
        />
        <dg.GradientWidget
          label='Gradient'
          stops={gradientState}
          onChange={onChangeGradient}
        />
        <dg.ButtonWidget
          label='Randomize Gradient'
          onClick={onClickRandomGradient.bind(this)}
        />
      </dg.FolderWidget>
      <dg.FolderWidget label='Animation' expanded={true}>
        <dg.NumberWidget
          label='Speed'
          min={0}
          max={0.01}
          step={0.001}
          value={speed}
          decimals={3}
          onChange={onChangeSpeed}
        />
        <dg.CheckboxWidget
          label='Translate'
          checked={translate}
          onChange={onChangeTranslate}
        />
*/
