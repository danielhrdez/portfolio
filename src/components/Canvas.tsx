import React, { useRef, useEffect } from 'react';

type Draw = (context: CanvasRenderingContext2D, frameCount: number) => void;

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {
  draw: Draw;
}

type CanvasRef = React.MutableRefObject<HTMLCanvasElement | null>;

function Canvas({ draw, ...rest }: CanvasProps): JSX.Element {
  const useCanvas = (draw: Draw): CanvasRef => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
      let frameCount = 0;
      let animationFrameId: number;
      const render = (): void => {
        frameCount++;
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      }
      render();
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw]);
    return canvasRef;
  }
  return <canvas ref={useCanvas(draw)} {...rest}/>;
}

export default Canvas;