import React from 'react';
import './scss/Block.scss';
import Canvas from './Canvas';

interface BlockProps {
  id: string;
  children: React.ReactNode;
}

function Block(props: BlockProps): JSX.Element {
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  return (
    <div id={props.id} className="block">
      {props.children}
      <Canvas draw={draw} className="block__canvas"/>
    </div>
  );
}

export default Block;
