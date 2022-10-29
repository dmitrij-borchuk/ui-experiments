import React from 'react'
import { ColorPicker } from './ColorPicker'
import { Container } from '../../components/container'

export const ColorPickerPage = () => {
  return (
    <Container width="100%" height="100%" background="#00D3AE">
      <ColorPicker />
    </Container>
  )
}
