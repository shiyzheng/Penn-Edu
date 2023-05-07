/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Posts } from './Posts';
import PostSearchBar from './PostSearchBar';

function FilterablePosts(props) {
  const [title, setTitle] = useState('');
  const { classroomId, posts, editPosts } = props;

  return (
    <div>
      <Link to="/home">Classrooms</Link>
      <PostSearchBar setTitle={setTitle} />
      <Posts
        classroomId={classroomId}
        title={title}
        posts={posts}
        editPosts={editPosts}
      />
    </div>
  );
}

export default FilterablePosts;
