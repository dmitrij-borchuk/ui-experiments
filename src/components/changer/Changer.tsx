import React, { useEffect, useState, useCallback } from 'react'
import cn from 'classnames'
import './styles.css'

export enum ANIMATION {
  FADE = 'FADE',
  // RIGHT = 'RIGHT',
  // BOTTOM = 'BOTTOM',
  // LEFT = 'LEFT',
}
const ANIMATION_TO_CLASS: Record<ANIMATION, string> = {
  [ANIMATION.FADE]: 'fade',
}
interface IChangerProps {
  animation?: ANIMATION
  // className?: string;
  children?: React.ReactNode
}
export const Changer: React.FC<IChangerProps> = (props) => {
  const { children, animation } = props
  const animationClassName = animation ? ANIMATION_TO_CLASS[animation] : ''
  const [currentChildren, setCurrentChildren] = useState(children)
  const [currentAnimation, setCurrentAnimation] = useState('')
  const onAnimationEnd = useCallback(() => {
    setCurrentAnimation('fade-in')
    setCurrentChildren(children)
  }, [children])
  useEffect(() => {
    if (currentChildren !== children) {
      // In case of fast children switching we need to finish previous animation first
      setCurrentAnimation('fade-in')
      setTimeout(() => {
        setCurrentAnimation('fade-out')
      }, 0)
    }
  }, [currentChildren, children, onAnimationEnd])

  return (
    <div
      className={cn(animationClassName, currentAnimation)}
      onAnimationEnd={onAnimationEnd}
    >
      {currentChildren}
    </div>
  )
}
