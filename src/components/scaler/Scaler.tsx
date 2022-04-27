import React, { useEffect, useState, useCallback } from 'react'
import cn from 'classnames'
import './styles.css'

// TODO: animation time as prop

type DivProps = React.ComponentProps<'div'>

type Trigger = () => void
interface IProps extends Omit<DivProps, 'children'> {
  scale?: number
  children: (trigger: Trigger) => React.ReactElement
}
export const Scaler = ({
  children,
  scale = 1.2,
  className,
  ...props
}: IProps) => {
  const defaultScale = 1
  const [currentScale, setCurrentScale] = useState(defaultScale)
  const [timer, setTimer] = useState<number | null>(null)
  const onTransitionEnd = useCallback(() => {
    setCurrentScale(defaultScale)
  }, [])
  const trigger = useCallback(() => {
    setCurrentScale(scale)
    if (timer) {
      clearTimeout(timer)
    }
    setTimer(setTimeout(onTransitionEnd, 50) as unknown as number)
  }, [onTransitionEnd, scale, timer])
  const [toRender, setToRender] = useState(<></>)

  useEffect(() => {
    setToRender(children(trigger))
  }, [children, trigger])

  return (
    <div
      className={cn('scalerScale', className)}
      // onTransitionEnd={onTransitionEnd}
      style={{ transform: `scale(${currentScale})` }}
      {...props}
    >
      {toRender}
    </div>
  )
}
