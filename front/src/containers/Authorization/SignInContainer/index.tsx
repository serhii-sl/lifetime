import * as React from 'react';
// components
import LoginForm from '../../../components/SignIn/LoginForm';
// styles
import { Description, HeaderText, SidebarBlock, SignInWrapper, FormBlock } from './styles';

const SignInContainer = () => {
  const handleLogin = () => {};

  return (
    <SignInWrapper>
      <SidebarBlock>
        <HeaderText>
          Adventure starts here
        </HeaderText>
        <Description>Create an account and join the community</Description>
      </SidebarBlock>
      <FormBlock>
        <LoginForm onSubmit={handleLogin} />
      </FormBlock>
    </SignInWrapper>
  );
};

export default SignInContainer;
