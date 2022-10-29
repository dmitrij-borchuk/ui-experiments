import React from 'react'
import { NumberSelectAlpha } from './NumberSelectAlpha'
import { Container } from '../../components/container'

export const NumberSelectAlphaPage = () => {
  return (
    <Container width="100%" height="100%" background="#00D3AE">
      <NumberSelectAlpha defaultValue={9} />
    </Container>
  )
}
