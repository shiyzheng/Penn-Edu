import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPostsInClassroomById } from '../api/posts';
import AddPost from './AddPost';
import FilterablePosts from './FilterablePosts';

function ClassroomView() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getAllPostsWrapper() {
      const response = await getAllPostsInClassroomById(id);
      // console.log('All posts', response);
      // response = await getPostById(3);
      // console.log('Post with id 3', response);
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
      <AddPost classroomId={id} setPosts={setPosts} />
      <FilterablePosts classroomId={id} posts={posts} editPosts={setPosts} />
    </div>
  );
}

export default ClassroomView;
