'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';
import CanvasRenderer from './canvasRender';
import * as gradientUtils from './gradientUtils';
import Demo from './demo.jsx';

const canvasId = 'demo';
let canvas;
let canvasRenderer;
let text = 'dis-gui-lifetoys';
let textColor = {red: 255, green: 255, blue: 255};
let stops = gradientUtils.random();
let translate = false;
let noise = 'Smooth';
let scale = 1.0;
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
  if (canvasRenderer) {
    canvasRenderer.setScale(scale);
  }
}

function onChangeSpeed(value) {
  speed = value;
  if (canvasRenderer) {
    canvasRenderer.setSpeed(speed);
  }
}

function onChangeGradient(value) {
  stops = value;
  if (canvasRenderer) {
    canvasRenderer.setStops(stops);
  }
}

function onChangeTranslate(value) {
  translate = value;
  if (canvasRenderer) {
    canvasRenderer.setTranslate(translate);
  }
}

function onChangeNoise(value) {
  noise = value;
  if (canvasRenderer) {
    canvasRenderer.setNoise(noise);
  }
}

window.onload = function() {
  canvas = document.getElementById(canvasId);
  canvasRenderer = new CanvasRenderer(canvas, stops, speed, noise, scale, translate);
  canvasRenderer.init();

  const container = document.getElementById('gui');
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Demo
        canvasId={canvasId}
        text={text}
        onChangeText={onChangeText}
        textColor={textColor}
        onChangeTextColor={onChangeTextColor}
        gradient={stops}
        onChangeGradient={onChangeGradient}
        scale={scale}
        onChangeScale={onChangeScale}
        speed={speed}
        onChangeSpeed={onChangeSpeed}
        translate={translate}
        onChangeTranslate={onChangeTranslate}
        noise={noise}
        onChangeNoise={onChangeNoise}
      />
    </React.StrictMode>
  );
};
