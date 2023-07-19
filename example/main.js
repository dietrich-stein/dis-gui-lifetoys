'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';
import CanvasRenderer from './canvas';
import * as gradientUtils from './gradientUtils';
import Demo from './demo.jsx';

const canvasId = 'demo';
let text = 'dis-gui-lifetoys';
let textColor = {red: 255, green: 255, blue: 255};
let initialStops = gradientUtils.random();
let translate = false;
let noise = 'Fractal';
let scale = 3.0;
let speed = 0.005;

function onChangeText(value) {
  document.getElementById('text').innerText = value;
}

function onChangeTextColor(value) {
  let style = document.getElementById('text').style;
  let color = `rgb(${value.red}, ${value.green}, ${value.blue})`;
  style.color = 'black';
  style.textShadow = `${color} 0 0 128px, ${color} 0 0 64px, ${color} 0 0 32px, ${color} 0 0 16px, ${color} 0 0 8px`;
}

function onChangeScale(value) {
  scale = value;
}

function onChangeSpeed(value) {
  speed = value;
}

function onChangeGradient(value) {
  gradientUtils.updateCanvas(value, gradientCanvas);
  gradientTexture({ data: gradientCanvas });
}

function onChangeTranslate(value) {
  translate = value;
}

function onChangeNoise(value) {
  noise = value;
}

window.onload = function() {
  const canvas = document.getElementById(canvasId);
  const canvasRenderer = new CanvasRenderer(canvas, initialStops, speed, noise, scale, translate);
  canvasRenderer.init();

  const container = document.getElementById('gui');
  const root = createRoot(container);
  root.render(
    <Demo
      canvasId={canvasId}
      text={text}
      onChangeText={onChangeText}
      textColor={textColor}
      onChangeTextColor={onChangeTextColor}
      scale={scale}
      onChangeScale={onChangeScale}
      speed={speed}
      onChangeSpeed={onChangeSpeed}
      translate={translate}
      onChangeTranslate={onChangeTranslate}
      gradient={initialStops}
      onChangeGradient={onChangeGradient}
      noise={noise}
      onChangeNoise={onChangeNoise}
    />
  );
};
