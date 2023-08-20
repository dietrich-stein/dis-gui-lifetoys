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

    let gradientCanvas = document.createElement('canvas');
    Object.assign(gradientCanvas, {width: 512, height: 1});
    gradientUtils.updateCanvas(this.stops, gradientCanvas);
    this.gradientTexture = this.regl.texture();
    this.gradientTexture({ data: gradientCanvas });

    this.time = 0.0;
  }

  init() {
    this.canvas.width = this.canvas.clientWidth / 2;
    this.canvas.height = this.canvas.clientHeight / 2;

    this.renderFrame();
  }

  setNoise(value) {
    this.noise = value;
  }

  renderFrame() {
    this.canvas.width = this.canvas.clientWidth / 2;
    this.canvas.height = this.canvas.clientHeight / 2;

    this.time += this.speed;

    this.regl.clear({
      color: [0, 0, 0, 0],
      depth: 1
    });
    console.log(this.noise);
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