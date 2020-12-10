import * as React from 'react'
// styles
import {Date, Header, HeaderContent, Name, PostWrapper, PostContent} from "./styles";
// components
import Avatar from "../../../shared/components/Avatar";
import Images from "./components/ImagesContainer";

const Posts = ({post: {owner, text, createdDate, images}}) => (
  <PostWrapper>
    <Header>
      <Avatar avatarSrc={owner.avatarSrc}/>
      <HeaderContent>
        <Name>{owner.fullName}</Name>
        <Date>{createdDate}</Date>
      </HeaderContent>
    </Header>
    <PostContent>{text}</PostContent>
    <Images images={images}/>
  </PostWrapper>
)

export default Posts
