import React from 'react'

interface IContainerProps {
  width: number;
  height: number;
  background?: string;
}
export const Container: React.FC<IContainerProps> = ({ width, height, children, background }) => {
  return <div className="flex items-center justify-center" style={{ width, height, background }}>{children}</div>
}
