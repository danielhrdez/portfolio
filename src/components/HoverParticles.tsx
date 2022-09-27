import React from "react";
import Canvas from "./Canvas";
import getCSSVariable from "../utils/getCSSVariable";

function HoverParticles(props: React.HTMLAttributes<HTMLCanvasElement>): JSX.Element {
  const background = (ctx: CanvasRenderingContext2D): void => {
    const canvasCoords = [0, 0, ctx.canvas.width, ctx.canvas.height] as const;
    const grd = ctx.createLinearGradient(...canvasCoords);
    const colorPrimary = getCSSVariable("--color-primary");
    const colorBackground = getCSSVariable("--color-background");
    grd.addColorStop(0, `rgb(${colorPrimary})`);
    grd.addColorStop(1, `rgb(${colorBackground})`);
    ctx.fillStyle = grd;
    ctx.fillRect(...canvasCoords);
  };
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    background(ctx);
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.stroke();
  };
  return <Canvas draw={draw} {...props} />;
}

export default HoverParticles;
