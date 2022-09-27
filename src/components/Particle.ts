import getCSSVariable from "../utils/getCSSVariable";

export default class Particle {
  readonly x: number;
  readonly y: number;
  private radius: number;
  readonly color: string;
  private alpha: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 20;
    this.color = getCSSVariable("--color-active");
    this.alpha = 0.25;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(): void {
    this.alpha -= 0.001;
    this.radius += 0.1;
  }

  getAlpha(): number {
    return this.alpha;
  }
}