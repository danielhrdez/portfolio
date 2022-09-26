import React from 'react';
import useCanvas from '../utils/useCanvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void,
  options?: CanvasOptions,
}

type CanvasOptions = {
  context?: '2d' | 'webgl' | 'bitmaprenderer',
  width?: number,
  height?: number,
  className?: string,
}

const Canvas = (props: CanvasProps) => { 
  const useCanvas = (draw: CanvasRenderingContext2D, options={}) => {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext(options.context || '2d')
      let frameCount = 0
      let animationFrameId
      const render = () => {
        frameCount++
        draw(context, frameCount)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw]);
    return canvasRef;
  }
  const { draw, options, ...rest } = props
  const { context, ...moreConfig } = options
  const canvasRef = useCanvas(draw, {context})
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas;
