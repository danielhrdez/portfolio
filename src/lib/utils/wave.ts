export class Wave {
  maxAmplitude: number;
  amplitude: number;
  length: number;
  frequency: number;
  increment: number;

  constructor(
    maxAmplitude = 100,
    length = 100,
    frequency = 8,
  ) {
    this.maxAmplitude = maxAmplitude;
    this.amplitude = 0;
    this.length = length;
    this.frequency = frequency;
    this.increment = Math.random() * 360;
  }

  draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = `hsl(${this.increment * 100}, 80%, 70%)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    const middleHeight = canvas.height / 2;
    context.moveTo(0, middleHeight);
    for (let i = 0; i < canvas.width; i += 10) {
      const y = middleHeight + Math.sin(i / this.length + this.increment) * this.amplitude;
      context.lineTo(i, y);
    }
    context.stroke();
    context.closePath();
    this.amplitude = Math.sin(this.increment) * this.maxAmplitude;
    this.increment -= this.frequency / 1000;
  }
}

export class Waves {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  waves: Wave[];

  constructor(canvas: HTMLCanvasElement, n = 1, bgOpacity = 0.1) {
    this.canvas = canvas;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas context is null');
    }
    this.ctx = ctx;
    this.waves = [];
    for (let i = 0; i < n; i += 1) {
      const maxAmplitude = Math.random() * 100 + 50;
      const length = Math.random() * 100 + 50;
      const frequency = Math.random() * 10 + 5;
      const wave = new Wave(maxAmplitude, length, frequency);
      this.waves.push(wave);
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    this.ctx.fillStyle = `rgba(0,0,0,0)`;
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    context.closePath();
    this.waves.forEach((wave) => {
      wave.draw(this.canvas, this.ctx);
    });
  }

  start() {
    this.draw(this.ctx);
    requestAnimationFrame(this.start.bind(this));
  }
}
