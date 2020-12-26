import * as React from 'react';
// styles
import { HeaderWrapper, LogoIcon } from './styles';
// components
import Avatar from '../../../shared/components/Avatar';
import ProfileTooltip from './components/ProfileTooltip';

const Header: React.FC = () => (
  <HeaderWrapper>
    <LogoIcon src={'static/images/lifetime.svg'} />
    <ProfileTooltip>
      <Avatar avatarSrc={'static/images/avatar_mock.png'} />
    </ProfileTooltip>
  </HeaderWrapper>
);

export default Header;
