import getCSSVariable from "../utils/getCSSVariable";
import Point2D from "./Point2D";

export default class Particle {
  private radius: number = Math.random() * 20;
  readonly color: string = getCSSVariable("--color-active");
  private alpha: number = 1;
  readonly speed: number = 0.005;

  constructor(readonly point: Point2D) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(newPoint: Point2D): void {
    this.alpha -= 0.01;
    this.radius += 0.01;
    const direction = this.point.directionFrom(newPoint);
    this.point.x += direction.x * this.speed;
    this.point.y += direction.y * this.speed;
  }

  getAlpha(): number {
    return this.alpha;
  }

  getPoint(): Point2D {
    return this.point;
  }
}