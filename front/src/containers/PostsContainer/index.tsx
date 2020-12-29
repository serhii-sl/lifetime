import * as React from 'react';
// mock
import { POSTS_MOCK } from './constants';
// components
import AddNews from '../../components/Posts/AddNews';
import Post from '../../components/Posts/Post';
// styles
import { PostsWrapper } from './styles';

const PostsContainer = () => (
  <PostsWrapper>
    <AddNews />
    {POSTS_MOCK.map((post) => (
      <Post post={post} key={post.postId} />
    ))}
  </PostsWrapper>
);

export default PostsContainer;
