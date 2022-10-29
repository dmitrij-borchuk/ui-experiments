import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { ColorPicker } from './ColorPicker'
import { Container } from '../../components/container'

export const ColorPickerPage = () => {
  const [rounds, setRounds] = useState<ReactNode[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
  const onChange = (d: string) => {
    setRounds((rounds) => [
      ...rounds,
      <div
        ref={ref}
        style={{
          background: d,
          height: '0vh',
          aspectRatio: '1',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'height 2s',
        }}
        className="rounded-full flex items-center justify-center absolute"
        key={n++}
      ></div>,
    ])
  }

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.height = '300vh'
      }
    }, 0)
  }, [rounds])

  return (
    <Container
      width="100%"
      height="100%"
      background="#00D3AE"
      overflow="hidden"
    >
      <div className="relative">
        {rounds}
        <ColorPicker onChange={onChange} />
      </div>
    </Container>
  )
}

let n = 0
