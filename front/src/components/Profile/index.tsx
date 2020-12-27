import * as React from 'react';
// context
import { HeaderNavigationContext } from '../../context/HeaderNavigation';
// components
import HeaderProfile from './components/HeaderProfile';
import ProfileTabs from './components/ProfileTabs';
// styles
import { ContainerWrapper } from './styles';
// constants

const ProfileContainer = () => {
  const { userName, setUserName } = React.useContext(HeaderNavigationContext);

  const mySubmitHandler = (event: any) => {
    event.preventDefault();
    alert('You are submitting ' + userName);
  };

  const myChangeHandler = (event: any) => {
    setUserName(event.target.value);
  };

  return (
    <ContainerWrapper>
      <HeaderProfile />
      <ProfileTabs />
      <form onSubmit={mySubmitHandler}>
        <h1>Hello {userName}</h1>
        <p>Enter your name, and submit:</p>
        <input type='text' onChange={myChangeHandler} />
        <button type='submit' />
      </form>
    </ContainerWrapper>
  );
};

export default ProfileContainer;
