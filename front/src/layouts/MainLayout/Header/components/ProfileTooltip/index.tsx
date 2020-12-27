import * as React from 'react';
// styles
import { TooltipWrapper, TooltipContent, Option } from './styles';
// constants
import { PROFILE_TOOLTIP_OPTIONS } from './constants';
// context
import { HeaderNavigationContext } from '../../../../../context/HeaderNavigation';

const ProfileTooltip: React.FC = ({ children }) => {
  const { setActiveTab, userName } = React.useContext(HeaderNavigationContext);

  return (
    <TooltipWrapper>
      <TooltipContent className={'tooltip-content'}>
        {PROFILE_TOOLTIP_OPTIONS.map(({ name, label }, index) => (
          <Option onClick={() => setActiveTab(label)} key={index}>
            {name}{userName}
          </Option>
        ))}
      </TooltipContent>
      {children}
    </TooltipWrapper>
  )
};

export default ProfileTooltip;
