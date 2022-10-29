import React from 'react'
import cn from 'classnames'
import './styles.css'

export enum DIRECTION {
  TOP = 'TOP',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
}
const DIRECTION_TO_CLASS: Record<DIRECTION, string> = {
  [DIRECTION.TOP]: 'direction-top',
  [DIRECTION.RIGHT]: 'direction-right',
  [DIRECTION.BOTTOM]: 'direction-bottom',
  [DIRECTION.LEFT]: 'direction-left',
}
interface IArrowProps {
  direction?: DIRECTION;
  className?: string;
}
export const Arrow: React.FC<IArrowProps> = (props) => {
  const { direction = DIRECTION.TOP, className } = props
  const directionClassName = DIRECTION_TO_CLASS[direction]

  return (
    <div
      className={cn(className, directionClassName, 'arrow border-teal-500')}
    />
  )
}
