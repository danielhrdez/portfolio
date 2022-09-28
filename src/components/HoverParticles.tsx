import React, { useEffect } from "react";
import Canvas from "./Canvas";
import Particles from "./Particles";
import Point2D from "./Point2D";

interface HoverParticlesProps extends React.HTMLAttributes<HTMLCanvasElement> {
  mouse: Point2D;
}
const particles: Particles = new Particles();

function HoverParticles(props: HoverParticlesProps): JSX.Element {
  const draw = (ctx: CanvasRenderingContext2D): void => {;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "overlay";
    particles.draw(ctx);
  };
  useEffect(() => {
    particles.addParticle(props.mouse);
    // console.log(props.mouse);
  }, [props.mouse]);
  return <Canvas draw={draw} {...props} />;
}

export default HoverParticles;
