import * as React from 'react';
// components
import HeaderProfile from '../../components/Profile/HeaderProfile';
import ProfileTabs from '../../components/Profile/ProfileTabs';
// styles
import { ContainerWrapper } from './styles';

const ProfileContainer = () => {
  return (
    <ContainerWrapper>
      <HeaderProfile />
      <ProfileTabs />
    </ContainerWrapper>
  );
};

export default ProfileContainer;
