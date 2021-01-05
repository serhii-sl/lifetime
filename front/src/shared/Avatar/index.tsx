import * as React from 'react';
// styles
import { AvatarComponent } from './styles';

interface IAvatarProps {
  avatarSrc: string;
  isOnline?: boolean;
}

const Avatar: React.FC<IAvatarProps> = ({ avatarSrc, isOnline }) => (
  <AvatarComponent src={avatarSrc} isOnline={isOnline} />
);

export default Avatar;
