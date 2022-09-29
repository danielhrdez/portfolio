import getCSSVariable from "../utils/getCSSVariable";
import Point2D from "./Point2D";

export default class Particle {
  private radius: number = Math.random() * 20;
  readonly color: string = getCSSVariable("--color-active");
  private alpha: number = 1;
  
  constructor(readonly point: Point2D) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(): void {
    this.alpha -= 0.01;
    this.radius += 0.01;
  }

  getAlpha(): number {
    return this.alpha;
  }

  getPoint(): Point2D {
    return this.point;
  }

  getRadius(): number {
    return this.radius;
  }
}