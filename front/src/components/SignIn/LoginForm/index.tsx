import * as React from 'react'
// redux
import { reduxForm, InjectedFormProps } from 'redux-form'
// components
import MainInput from '../../../shared/Form/MainInput'
// styles
import {
  LoginFormStyled,
  LoginButton,
  Header,
  SocialIcon,
  Text,
} from './styles'

const LoginForm: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <Header>Sign in</Header>
      <MainInput
        name='email'
        type='email'
        placeholder='Enter your email'
        image={'static/icons/email.svg'}
      />
      <MainInput
        name='password'
        type='password'
        placeholder='Enter a password'
        image={'static/icons/password.svg'}
      />
      <LoginButton type='submit'>Login</LoginButton>
      <Text>or</Text>
      <div>
        <SocialIcon src={'static/icons/google.svg'} />
        <SocialIcon src={'static/icons/facebook.svg'} />
        <SocialIcon src={'static/icons/instagram.svg'} />
        <SocialIcon src={'static/icons/apple.svg'} />
      </div>
    </LoginFormStyled>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)
