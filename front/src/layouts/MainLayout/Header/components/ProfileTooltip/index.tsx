import * as React from 'react';
// styles
import { TooltipWrapper, TooltipContent, Option } from './styles';
// constants
import { PROFILE_TOOLTIP_OPTIONS } from './constants';

const ProfileTooltip: React.FC = ({ children }) => (
  <TooltipWrapper>
    <TooltipContent className={'tooltip-content'}>
      {PROFILE_TOOLTIP_OPTIONS.map(({ name, onClick }, index) => (
        <Option onClick={onClick} key={index}>
          {name}
        </Option>
      ))}
    </TooltipContent>
    {children}
  </TooltipWrapper>
);

export default ProfileTooltip;
