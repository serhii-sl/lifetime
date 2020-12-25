import * as React from 'react';
// styles
import { HeaderWrapper, LogoIcon } from './styles';
// components
import AddNews from './components/AddNews';
import Avatar from '../../../shared/components/Avatar';

interface IHeaderProps {
  isHomePage?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isHomePage }) => (
  <HeaderWrapper>
    <LogoIcon src={'static/images/lifetime.svg'} />
    {isHomePage && <AddNews />}
    <Avatar avatarSrc={'static/images/avatar_mock.png'} />
  </HeaderWrapper>
);

export default Header;
