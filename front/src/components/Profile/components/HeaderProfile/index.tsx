import * as React from 'react';
// styles
import { Wrapper, Avatar, UserName } from './styles';
// components

// constants

const HeaderProfile = () => {
  return (
    <Wrapper>
      <Avatar src={'static/images/avatar_mock1.jpeg'} />
      <UserName>Serhii Slavita</UserName>
    </Wrapper>
  );
};

export default HeaderProfile;
