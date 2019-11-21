import React from 'react'
import cn from 'classnames'
import './styles.scss'

interface IScreenProps {
  className?: string;
}
export const Screen: React.FC<IScreenProps> = ({ className, children }) => {
  return <div className={cn(className, 'screen-container')}>{children}</div>
}
