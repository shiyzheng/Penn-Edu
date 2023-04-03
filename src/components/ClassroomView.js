import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../api/posts';
import AddPost from './AddPost';
import FilterablePosts from './FilterablePosts';

function ClassroomView() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getAllPostsWrapper() {
      const response = await getAllPosts();
      return response;
    }
    getAllPostsWrapper();
  });
  return (
    <div>
      <AddPost posts={posts} addNewPost={setPosts} />
      <FilterablePosts posts={posts} editPosts={setPosts} />
    </div>
  );
}

export default ClassroomView;
