import React, {
  useRef,
  useEffect,
  useState,
  TransitionEvent,
  useCallback,
  useMemo,
} from 'react'
import cn from 'classnames'
import './styles.scss'

const fullScreenPositions = {
  top: '0px',
  width: '100%',
  height: '100%',
  left: '0px',
}
interface IFullScreenResizerProps {
  className?: string
  top?: string
  left?: string
  width?: string
  height?: string
  reverse?: boolean
  onAnimationEnd?: (
    event: TransitionEvent<HTMLDivElement>,
    isFullScreen: boolean
  ) => void
  children?: React.ReactNode
}
export const FullScreenResizer: React.FC<IFullScreenResizerProps> = (props) => {
  const {
    className,
    children,
    top,
    left,
    width,
    height,
    reverse,
    onAnimationEnd = () => {},
  } = props
  const elementRef = useRef<HTMLDivElement>(null)
  const originalPositions = useMemo(
    () => ({
      top,
      width,
      height,
      left,
    }),
    [height, left, top, width]
  )
  const [currentPosition, setCurrentPosition] = useState(
    reverse ? fullScreenPositions : originalPositions
  )
  const time = '0.5s'
  const animationEnd = useCallback(
    (e: TransitionEvent<HTMLDivElement>) => {
      onAnimationEnd(e, !reverse)
    },
    [onAnimationEnd, reverse]
  )

  useEffect(() => {
    setCurrentPosition(reverse ? originalPositions : fullScreenPositions)
  }, [originalPositions, reverse])

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
        transition: `top ${time}, width ${time}, left ${time}, height ${time}`,
      }}
    >
      {children}
    </div>
  )
}
