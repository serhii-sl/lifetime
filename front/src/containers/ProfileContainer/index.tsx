import * as React from 'react';
// components
import HeaderProfile from '../../components/Profile/HeaderProfile';
import ProfileTabs from '../../components/Profile/ProfileTabs';
// styles
import { ContainerWrapper } from './styles';

const ProfileContainer = () => {
  const mySubmitHandler = (event: any) => {};

  const myChangeHandler = (event: any) => {};

  return (
    <ContainerWrapper>
      <HeaderProfile />
      <ProfileTabs />
      <form onSubmit={mySubmitHandler}>
        <h1>Hello {}</h1>
        <p>Enter your name, and submit:</p>
        <input type='text' onChange={myChangeHandler} />
        <button type='submit' />
      </form>
    </ContainerWrapper>
  );
};

export default ProfileContainer;
