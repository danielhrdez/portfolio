import React, { useRef, useEffect } from 'react';

type Draw = (context: CanvasRenderingContext2D, frameCount: number) => void;

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {
  draw: Draw;
}

// type CanvasRef = React.MutableRefObject<HTMLCanvasElement | null>;

function Canvas({ draw, ...rest }: CanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
    let frameCount = 0;
    let animationFrameId: number;
    const render = (): void => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = requestAnimationFrame(render);
    }
    render();
    return (): void => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return <canvas ref={canvasRef} {...rest}/>;
}

export default Canvas;