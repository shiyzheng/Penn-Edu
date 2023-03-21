/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function PostCard(props) {
  const { posts, onEdit } = props;
  const { title: postTitle, body: postBody, id } = posts;
  const [title, setTitle] = useState(postTitle);
  const [body, setBody] = useState(postBody);
  const [prevTitle, setPrevTitle] = useState(postTitle);
  const [prevBody, setPrevBody] = useState(postBody);
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
    onEdit({
      id,
      title,
      body,
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
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="button" onClick={handleSave}>Save</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        Question:
        {' '}
        {postTitle}
      </div>
      <div>
        Body:
        {' '}
        {postBody}
      </div>
      <div>
        ID:
        {' '}
        {id}
      </div>
      <button type="button" onClick={handleEdit}>Edit</button>
    </div>
  );
}

function Posts(props) {
  const { posts, editPosts, title } = props;
  const handleEditPosts = (updatedPost) => {
    const displayedPosts = [];
    posts.forEach((element) => {
      if (element.id === updatedPost.id) {
        displayedPosts.push(
          updatedPost,
        );
      } else {
        displayedPosts.push(
          element,
        );
      }
    });
    editPosts(displayedPosts);
  };

  const displayPosts = () => {
    const displayedPosts = [];
    posts.forEach((element) => {
      if (title === '') {
        displayedPosts.push(
          <PostCard posts={element} onEdit={handleEditPosts} />,
        );
      } else if (element.title.includes(title)) {
        displayedPosts.push(
          <PostCard posts={element} onEdit={handleEditPosts} />,
        );
      }
    });
    return displayedPosts;
  };

  const displayedPosts = displayPosts();
  return (
    <div>
      Posts
      {displayedPosts}
    </div>
  );
}

export { Posts, PostCard };
