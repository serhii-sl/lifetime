import * as React from 'react'
// styles
import { HeaderWrapper, LogoIcon } from './styles'
// components
import Avatar from '../../../shared/Avatar'
import ProfileTooltip from './components/ProfileTooltip'
import NavigationTabs from './components/NavigationTabs'

const Header: React.FC = () => (
  <HeaderWrapper>
    <LogoIcon src={'static/images/lifetime.svg'} />
    <NavigationTabs />
    <ProfileTooltip>
      <Avatar avatarSrc={'static/images/avatar_mock.png'} />
    </ProfileTooltip>
  </HeaderWrapper>
)

export default Header
