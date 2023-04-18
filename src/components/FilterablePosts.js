/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Posts } from './Posts';
import PostSearchBar from './PostSearchBar';

function FilterablePosts(props) {
  const [title, setTitle] = useState('');
  const { posts, editPosts } = props;
  return (
    <div>
      <PostSearchBar setTitle={setTitle} />
      <Posts title={title} posts={posts} editPosts={editPosts} />
    </div>
  );
}

export default FilterablePosts;
