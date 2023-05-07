/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Posts } from './Posts';
import PostSearchBar from './PostSearchBar';

function FilterablePosts(props) {
  const [title, setTitle] = useState('');
  const { classroomId, posts, editPosts } = props;

  // const getCurrentUser = async () => {
  //   try {
  //     const response = await axios.get('/account/isLogged');
  //     return response.data;
  //   } catch (err) {
  //     return err;
  //   }
  // };

  // const user = async () => {
  //   const currentUser = await getCurrentUser();
  //   return currentUser;
  // };

  return (
    <div>
      <Link to="/home">Classrooms</Link>
      <PostSearchBar setTitle={setTitle} />
      <Posts
        // user={user}
        classroomId={classroomId}
        title={title}
        posts={posts}
        editPosts={editPosts}
      />
    </div>
  );
}

export default FilterablePosts;
