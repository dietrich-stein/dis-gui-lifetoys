import mat4 from 'gl-mat4';
import REGL from 'regl';
import createFractal from './fractal';
import createSmooth from './smooth';
import * as gradientUtils from './gradientUtils';

export default class CanvasRenderer {
  constructor(canvasElement, initialStops, speed, noise, scale, translate) {
    this.canvas = canvasElement;
    this.stops = initialStops;
    this.speed = speed;
    this.noise = noise;
    this.scale = scale;
    this.translate = translate;

    this.model = mat4.create();
    this.view = mat4.create();
    this.projection = mat4.create();

    this.regl = REGL(this.canvas);
    window.regl = this.regl; // Alias regl for fractal and smooth

    this.drawSmooth = createSmooth(this.regl);
    this.drawFractal = createFractal(this.regl);

    this.gradientCanvas = null;


    this.time = 0.0;
  }

  init() {
    this.gradientCanvas = document.createElement('canvas');
    Object.assign(this.gradientCanvas, {width: 512, height: 1});

    this.gradientTexture = this.regl.texture();

    this.updateGradientTexture();

    this.canvas.width = this.canvas.clientWidth / 2;
    this.canvas.height = this.canvas.clientHeight / 2;

    this.renderFrame();
  }

  setNoise(value) {
    this.noise = value;
  }

  setScale(value) {
    this.scale = value;
  }

  setSpeed(value) {
    this.speed = value;
  }

  setTranslate(value) {
    this.translate = value;
  }

  setStops(value) {
    this.stops = value;
    if (this.gradientCanvas !== null) {
      this.updateGradientTexture();
    }
  }

  updateGradientTexture() {
    gradientUtils.updateCanvas(this.stops, this.gradientCanvas);
    this.gradientTexture({ data: this.gradientCanvas });
  }

  renderFrame() {
    this.canvas.width = this.canvas.clientWidth / 2;
    this.canvas.height = this.canvas.clientHeight / 2;

    this.time += this.speed;

    this.regl.clear({
      color: [0, 0, 0, 0],
      depth: 1
    });

    let renderFunction = {
      'Smooth': this.drawSmooth,
      'Fractal': this.drawFractal
    }[this.noise];

    renderFunction({
      uScale: this.scale,
      uTime: this.time,
      uTexture: this.gradientTexture,
      uOffset: this.translate
        ? [Math.cos(this.time / 10) * 100.0, Math.sin(this.time / 10) * 100.0]
        : [0, 0],
      width: this.canvas.width,
      height: this.canvas.height
    });

    requestAnimationFrame(this.renderFrame.bind(this));
  };
}