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
    for (let i = 0; i < canvas.width; i += 1) {
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
  waves: Wave[];

  constructor(n = 1) {
    this.waves = [];
    for (let i = 0; i < n; i += 1) {
      const maxAmplitude = Math.random() * 100 + 50;
      const length = Math.random() * 100 + 50;
      const frequency = Math.random() * 8 + 4;
      const wave = new Wave(maxAmplitude, length, frequency);
      this.waves.push(wave);
    }
  }

  draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = `rgba(0,0,0,0)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.closePath();
    this.waves.forEach((wave) => {
      wave.draw(canvas, context);
    });
  }

  start(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');
    if (!context) return;
    this.draw(canvas, context);
    requestAnimationFrame(() => this.start(canvas));
  }
}
