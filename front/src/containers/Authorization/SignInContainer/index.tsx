import * as React from 'react'
// components
import LoginForm from '../../../components/SignIn/LoginForm'
// styles
import {
  Description,
  HeaderText,
  SidebarBlock,
  SignInWrapper,
  FormBlock,
} from './styles'
import { useLogin } from './hooks/useLogin'

const SignInContainer = () => {
  const { handleSignIn } = useLogin()

  return (
    <SignInWrapper>
      <SidebarBlock>
        <HeaderText>Adventure starts here</HeaderText>
        <Description>Create an account and join the community</Description>
      </SidebarBlock>
      <FormBlock>
        <LoginForm onSubmit={handleSignIn} />
      </FormBlock>
    </SignInWrapper>
  )
}

export default SignInContainer
