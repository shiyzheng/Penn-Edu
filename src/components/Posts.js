/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function PostCard(props) {
  const { posts, onEdit } = props;
  const {
    title: postTitle, body: postBody, anonymous: postAnonymous, private: postPriv, id,
    replies: postReplies,
  } = posts;

  const [title, setTitle] = useState(postTitle);
  const [body, setBody] = useState(postBody);
  const [anonymous, setAnonymous] = useState(postAnonymous);
  const [priv, setPriv] = useState(postPriv);

  const [prevTitle, setPrevTitle] = useState(postTitle);
  const [prevBody, setPrevBody] = useState(postBody);
  const [prevAnonymous, setPrevAnonymous] = useState(postAnonymous);
  const [prevPriv, setPrevPriv] = useState(postPriv);
  const [isEditing, setIsEditing] = useState(false);
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState(postReplies);

  const handleReplySubmit = () => {
    const updatedReplies = [...replies, reply];
    setReplies(updatedReplies);
    onEdit({
      id,
      title,
      body,
      anonymous,
      private: priv,
      replies: updatedReplies,
    });
    setReply('');
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

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
      anonymous,
      private: priv,
      replies,
    });
    setIsEditing(!isEditing);
    setPrevTitle(title);
    setPrevBody(body);
    setPrevAnonymous(anonymous);
    setPrevPriv(priv);
  };

  const handleCancel = () => {
    setIsEditing(!isEditing);
    setTitle(prevTitle);
    setBody(prevBody);
    setAnonymous(prevAnonymous);
    setPriv(prevPriv);
  };

  if (isEditing) {
    return (
      <div>
        <div>
          Title:
          <input type="input" id="title" data-testid="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          Body:
          <input value={body} name="body" type="input" id="body" data-testid="body" onChange={handleBodyChange} />
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            id="Private"
            defaultChecked={priv}
            onClick={() => setPriv(!priv)}
          />
          Private
        </div>
        <div className="form-check col-md-6 ">
          <input
            className="form-check-input"
            type="checkbox"
            id="Anonymous"
            defaultChecked={anonymous}
            onClick={() => setAnonymous(!anonymous)}
          />
          Anonymous
        </div>
        <button data-testid="cancel" id="cancel" type="button" onClick={handleCancel}>Cancel</button>
        <button data-testid="save" id="save" type="button" onClick={handleSave}>Save</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        Question
        {' '}
        {id}
        :
        {' '}
        {postTitle}
      </div>
      <div>
        Body:
        {' '}
        {postBody}
      </div>
      <div>
        {replies.map((txt) => (
          <p>
            {' '}
            Reply:
            {' '}
            {txt}
          </p>
        ))}
      </div>
      <button data-testid="edit" id="edit" type="button" onClick={handleEdit}>Edit</button>
      <br />
      <input name="reply" type="input" id="reply" data-testid="reply" value={reply} onChange={handleReplyChange} />
      <button data-testid="replyButton" id="replyButton" type="button" onClick={handleReplySubmit}>Reply</button>
    </div>
  );
}

function Posts(props) {
  const { posts, title, editPosts } = props;
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
      } else if (element.title.toLowerCase().includes(title.toLowerCase())
      || element.body.toLowerCase().includes(title.toLowerCase())) {
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
      <h1 data-testid="posts"> Posts </h1>
      {displayedPosts}
    </div>
  );
}

export { Posts, PostCard };
