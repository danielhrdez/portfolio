import { useRef, useEffect } from 'react'

type Draw = (context: CanvasRenderingContext2D, frameCount: number) => void;

function useCanvas(draw: Draw): React.MutableRefObject<HTMLCanvasElement | null> {
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

export default useCanvas;
