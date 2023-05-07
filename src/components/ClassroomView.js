/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPostsInClassroomById } from '../api/posts';
import AddPost from './AddPost';
import FilterablePosts from './FilterablePosts';

function ClassroomView(props) {
  const { login } = props;
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getAllPostsWrapper() {
      const response = await getAllPostsInClassroomById(id);
      setPosts(response);
    }
    getAllPostsWrapper();
  }, [posts.length]);
  return (
    <div>
      <AddPost login={login} classroomId={id} setPosts={setPosts} />
      <FilterablePosts classroomId={id} posts={posts} editPosts={setPosts} />
    </div>
  );
}

export default ClassroomView;
