import React, { useState, useEffect } from 'react';
import { createNewPost, getAllPosts, getPostById } from '../api/posts';
import AddPost from './AddPost';
import FilterablePosts from "./FilterablePosts";

function ClassroomView(props)  {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getAllPostsWrapper() {
            let response = await getAllPosts();
            console.log('All posts', response);
            response = await getPostById(3);
            console.log('Post with id 3', response);
            return response;
        }
        getAllPostsWrapper();

        async function createNewPostWrapper() {
            const newPost = {"title":"hw1 q1 help", "body":"help"};
            let response = await createNewPost(newPost);
            console.log('new post', response);
            return response;
        }
        createNewPostWrapper()
    }, [posts]);
    return (
    <div>
        <AddPost posts={posts} addNewPost={setPosts}/>
        <FilterablePosts posts={posts}/>
    </div>
    );
}

export default ClassroomView;