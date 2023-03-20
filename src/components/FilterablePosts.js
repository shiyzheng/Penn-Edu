import React, { useState } from 'react';
import Posts from "./Posts";
import PostSearchBar from "./PostSearchBar";

function FilterablePosts(props)  {
    const [title, setTitle] = useState('');

    return (
        <div>
            <PostSearchBar setTitle={setTitle} />
            <Posts title={title} posts={props.posts} editPosts={props.editPosts} />
        </div>
    );
}

export default FilterablePosts;