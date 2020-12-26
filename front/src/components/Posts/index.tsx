import * as React from 'react';
// mock
import { POSTS_MOCK } from './constants';
// components
import Post from './components/Post';
import AddNews from './components/AddNews';
// styles
import { PostsWrapper } from './styles';

const Posts = () => (
  <PostsWrapper>
    <AddNews />
    {POSTS_MOCK.map((post) => (
      <Post post={post} key={post.postId} />
    ))}
  </PostsWrapper>
);

export default Posts;
