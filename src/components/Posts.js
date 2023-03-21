
import React, { useState } from 'react';

function PostCard(props) {
    const [title, setTitle] = useState(props.posts.title);
    const [body, setBody] = useState(props.posts.body);
    const [prevTitle, setPrevTitle] = useState(props.posts.title);
    const [prevBody, setPrevBody] = useState(props.posts.body);
    const [isEditing, setIsEditing] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        props.onEdit({
            id: props.posts.id,
            title: title,
            body: body
        });
        setIsEditing(!isEditing);
        setPrevTitle(title);
        setPrevBody(body);
    };

    const handleCancel = () => {
        setIsEditing(!isEditing);
        setTitle(prevTitle);
        setBody(prevBody);
    };

    if (isEditing) {
        return (
            <div>
                <div>
                    Title:
                    <input type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    Body:
                    <textarea value={body} onChange={handleBodyChange} />
                </div>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    Question: {props.posts.title}
                </div>
                <div>
                    Body: {props.posts.body}
                </div>
                <div>
                    ID: {props.posts.id}
                </div>
                <button onClick={handleEdit}>Edit</button>
            </div>
        );
    }
}

function Posts(props) {
    const displayPosts = () => {
        const displayedPosts = [];
        props.posts.forEach(element => {
            if (props.title === '') {
                displayedPosts.push(
                    <PostCard posts={element} onEdit={handleEditPosts} />);
            } else {
                if (element.title.includes(props.title)) {
                    displayedPosts.push(
                        <PostCard posts={element} onEdit={handleEditPosts} />);
                }
            }
        })
        return displayedPosts;
    }
    
    const handleEditPosts = (updatedPost) => {
        const displayedPosts = [];
        props.posts.forEach(element => {
            if (element.id === updatedPost.id) {
                displayedPosts.push(
                    updatedPost);
            } else {
                displayedPosts.push(
                    element);
            }
        })
        props.editPosts(displayedPosts);
    }

    const displayedPosts = displayPosts();
    return (
        <div>
            Posts
            {displayedPosts}
        </div>
    );
}

export default Posts;