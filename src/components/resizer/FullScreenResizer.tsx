import React, { useRef, useEffect, useState, TransitionEvent, useCallback } from 'react'
import cn from 'classnames'
import './styles.scss'

interface IFullScreenResizerProps {
  className?: string;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  reverse?: boolean;
  onAnimationEnd?: (event: TransitionEvent<HTMLDivElement>, isFullScreen: boolean) => void;
}
export const FullScreenResizer: React.FC<IFullScreenResizerProps> = (props) => {
  const { className, children, top, left, width, height, reverse, onAnimationEnd = () => {} } = props
  const elementRef = useRef<HTMLDivElement>(null)
  const [animationSemaphore, setAnimationSemaphore] = useState(0)
  const fullScreenPositions = {
    top: '0px',
    width: '100%',
    height: '100%',
    left: '0px',
  }
  const originalPositions = {
    top,
    width,
    height,
    left,
  }
  const [currentPosition, setCurrentPosition] = useState(reverse ? fullScreenPositions : originalPositions)
  const time = '0.5s'
  const animationEnd = useCallback((e: TransitionEvent<HTMLDivElement>) => {
    if (animationSemaphore === 3) {
      onAnimationEnd(e, !reverse)
      setAnimationSemaphore(0)
    } else {
      setAnimationSemaphore(animationSemaphore + 1)
    }
  }, [onAnimationEnd, reverse, animationSemaphore])

  useEffect(() => {
    setCurrentPosition(reverse ? originalPositions : fullScreenPositions)
  }, [elementRef.current, reverse])

  return (
    <div
      ref={elementRef}
      className={cn(className, 'screen-container')}
      onTransitionEnd={animationEnd}
      style={{
        position: 'absolute',
        top: currentPosition.top,
        width: currentPosition.width,
        height: currentPosition.height,
        left: currentPosition.left,
        transition: `top ${time}, width ${time}, left ${time}, height ${time}`
      }}
    >{children}</div>
  )
}
