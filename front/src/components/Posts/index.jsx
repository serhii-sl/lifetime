import * as React from 'react'
// mock
import {POSTS_MOCK} from "./constants";
// components
import Post from './Post'
// styles
import {PostsWrapper} from './styles'

const Posts = () => (
  <PostsWrapper>
    {POSTS_MOCK.map(post => (
      <Post post={post} key={post.postId}/>
    ))}
  </PostsWrapper>
)

export default Posts
