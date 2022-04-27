import React from 'react'

interface IContainerProps {
  width: string
  height: string
  background?: string
  children?: React.ReactNode
}
export const Container: React.FC<IContainerProps> = ({
  width,
  height,
  children,
  background,
}) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width, height, background }}
    >
      {children}
    </div>
  )
}
