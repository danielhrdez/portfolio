import Particle from "./Particle";

export default class Particles {
  private particles: Particle[] = [];

  constructor(readonly max: number) {}
  
  addParticle(x: number, y: number): void {
    if (this.particles.length < this.max) {
      this.particles.push(new Particle(x, y));
    }
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
