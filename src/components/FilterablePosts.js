/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { PropTypes } from 'prop-types';
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

// FilterablePosts.propTypes = {
//   posts: PropTypes.arrays.isRequired,
//   editPosts: PropTypes.func.isRequired,
// };

export default FilterablePosts;
