import * as React from 'react';
// styles
import { TooltipWrapper, TooltipContent, Option } from './styles';
// constants
import { PROFILE_TOOLTIP_OPTIONS } from './constants';
// router
import { Link } from 'react-router-dom';

const ProfileTooltip: React.FC = ({ children }) => {
  return (
    <TooltipWrapper>
      <TooltipContent className={'tooltip-content'}>
        {PROFILE_TOOLTIP_OPTIONS.map(({ title, href }, index) => (
          <Link to={href} key={index}>
            <Option>
              {title}
            </Option>
          </Link>
        ))}
      </TooltipContent>
      {children}
    </TooltipWrapper>
  )
};

export default ProfileTooltip;
