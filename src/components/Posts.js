/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { editPost, getAdmins } from '../api/posts';
import { getCurrentUser } from '../api/users';

function PostCard(props) {
  const { classroomId, posts, onEdit } = props;
  const {
    title: postTitle, body: postBody, anonymous: postAnonymous, private: postPriv, _id,
    replies: postReplies, author,
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

  // const [isAuthor, setIsAuthor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currUser, setCurrUser] = useState('');

  useEffect(() => {
    const checkAdmins = async () => {
      const admins = await getAdmins(classroomId);
      const currentUser = await getCurrentUser();
      setIsAdmin(admins.includes(currentUser));
      // console.log(isAdmin);
    };
    checkAdmins();
  }, [posts.length]);

  useEffect(() => {
    const checkAuthor = async () => {
      const currentUser = await getCurrentUser();
      setCurrUser(currentUser);
    };
    checkAuthor();
  }, []);

  const handleReplySubmit = () => {
    const replies1 = Array.isArray(replies) ? replies : [replies];
    const updatedReplies = [...replies1, reply];
    setReplies(updatedReplies);
    onEdit({
      _id,
      title,
      body,
      anonymous,
      private: priv,
      replies: updatedReplies,
      author,
    });
    setReply('');
    editPost(
      classroomId,
      _id,
      title,
      body,
      anonymous,
      priv,
      updatedReplies,
      author,
    );
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
      _id,
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
    editPost(
      classroomId,
      _id,
      title,
      body,
      anonymous,
      priv,
      replies,
      author,
    );
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
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div>
              <div>
                Title:
                <input className="form-control d-inline-block" style={{ width: '200px' }} type="input" id="title" data-testid="title" value={title} onChange={handleTitleChange} />
              </div>
              <div>
                Body:
                <textarea className="form-control" value={body} name="body" type="input" id="body" data-testid="body" onChange={handleBodyChange} style={{ height: '100px' }} />
              </div>
              <div className="form-check col-md-6 ">
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
              <button className="btn btn-danger" data-testid="cancel" id="cancel" type="button" onClick={handleCancel}>Cancel</button>
              <button className="btn btn-success" data-testid="save" id="save" type="button" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!priv || (currUser === author) || isAdmin) {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div>
              <div>
                {anonymous ? (
                  <div>
                    Author:
                    {' '}
                    Anonymous
                  </div>
                ) : (
                  <div>
                    Author:
                    {' '}
                    {author}
                  </div>
                )}
              </div>
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
                {replies?.map((txt) => (
                  <p>
                    {' '}
                    Reply:
                    {' '}
                    {txt}
                  </p>
                ))}
              </div>
              {(currUser === author) ? (
                <button className="btn btn-warning" data-testid="edit" id="edit" type="button" onClick={handleEdit}>Edit</button>
              ) : (
                null
              )}
              <br />
              <input className="form-control d-inline-block" style={{ width: '200px' }} name="reply" type="input" id="reply" data-testid="reply" value={reply} onChange={handleReplyChange} />
              <button className="btn btn-primary" data-testid="replyButton" id="replyButton" type="button" onClick={handleReplySubmit}>Reply</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function Posts(props) {
  const {
    classroomId, posts, title, editPosts,
  } = props;

  const handleEditPosts = (updatedPost) => {
    const displayedPosts = [];
    [...posts].forEach((element) => {
      if (element._id === updatedPost._id) {
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
    [...posts].forEach((element) => {
      if (title === '') {
        displayedPosts.push(
          <PostCard
            // user={user}
            classroomId={classroomId}
            posts={element}
            onEdit={handleEditPosts}
          />,
        );
      } else if (element.title.toLowerCase().includes(String(title).toLowerCase())
      || element.body.toLowerCase().includes(String(title).toLowerCase())) {
        displayedPosts.push(
          <PostCard
            classroomId={classroomId}
            posts={element}
            onEdit={handleEditPosts}
          />,
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
