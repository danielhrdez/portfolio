import Particle from "./Particle";
import Point2D from "./Point2D";

export default class Particles {
  private particles: Particle[] = [];
  
  addParticle(point: Point2D): void {
    this.particles.push(new Particle(point));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.particles.forEach((particle) => particle.draw(ctx));
    this.update();
  }

  private update(): void {
    this.particles.forEach((particle) => particle.update());
    this.particles = this.particles.filter((particle) => particle.getAlpha() > 0);
  }
}
