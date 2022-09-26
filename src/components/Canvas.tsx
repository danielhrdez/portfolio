import React from 'react';
import useCanvas from '../utils/useCanvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
}

function Canvas(props: CanvasProps): JSX.Element {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);
  return <canvas ref={canvasRef} {...rest}/>;
}

export default Canvas