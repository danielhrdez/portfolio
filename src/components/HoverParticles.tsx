import React from "react";
import Canvas from "./Canvas";
import Particles from "./Particles";

interface HoverParticlesProps extends React.HTMLAttributes<HTMLCanvasElement> {
  maxparticles: number;
}

function HoverParticles(props: HoverParticlesProps): JSX.Element {
  const particles: Particles = new Particles(props.maxparticles);
  const mouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>): void => {
    const x = event.clientX;
    const y = event.clientY;
    particles.addParticle(x, y);
    console.log(x, y);
  };
  const draw = (ctx: CanvasRenderingContext2D): void => {;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "overlay";
    particles.draw(ctx);
  };
  return <Canvas draw={draw} onMouseMove={mouseMove} {...props} />;
}

export default HoverParticles;
