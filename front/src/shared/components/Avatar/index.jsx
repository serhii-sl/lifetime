import * as React from 'react'
// styles
import { AvatarComponent } from "./styles";

const Avatar = ({avatarSrc, isOnline}) => (
    <AvatarComponent src={avatarSrc} isOnline={isOnline} />
)

export default Avatar
