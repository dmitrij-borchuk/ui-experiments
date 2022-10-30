import React from 'react'
import { Container } from '../../components/container'
import { AuthForm } from './authForm'

export const AuthFormPage = () => {
  return (
    <Container height="100%" width="100%" background="#6ac8ec">
      <div className="h-80">
        <AuthForm />
      </div>
    </Container>
  )
}
