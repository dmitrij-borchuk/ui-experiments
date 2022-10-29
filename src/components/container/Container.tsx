import React from 'react'

interface IContainerProps {
  width: string
  height: string
  background?: string
  overflow?: string
  children?: React.ReactNode
}
export const Container: React.FC<IContainerProps> = ({
  width,
  height,
  children,
  background,
  overflow,
}) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width, height, background, overflow }}
    >
      {children}
    </div>
  )
}
