import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPostsInClassroomById } from '../api/posts';
import AddPost from './AddPost';
import FilterablePosts from './FilterablePosts';

function ClassroomView(props) {
  const { login, username } = props;
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getAllPostsWrapper() {
      const response = await getAllPostsInClassroomById(id);
      setPosts(response);
    }
    getAllPostsWrapper();
    // async function createNewPostWrapper() {
    //     const newPost = {"title":"hw1 q1 help", "body":"help"};
    //     let response = await createNewPost(newPost);
    //     console.log('new post', response);
    //     return response;
    // }
    // createNewPostWrapper()
  }, [posts.length]);
  return (
    <div>
      <AddPost login={login} classroomId={id} setPosts={setPosts} />
      <FilterablePosts classroomId={id} posts={posts} editPosts={setPosts} />
    </div>
  );
}

export default ClassroomView;
