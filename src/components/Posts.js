
import React, { useState } from 'react';

function PostCard(props) {
  const { posts } = props;
  const {
    title: postTitle, body: postBody, anonymous: postAnonymous, private: postPriv,
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
      title,
      body,
      anonymous,
      private: priv,
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
            checked={priv}
            onClick={() => setPriv(!priv)}
          />
          Private
        </div>
        <div className="form-check col-md-6 ">
          <input
            className="form-check-input"
            type="checkbox"
            id="Anonymous"
            checked={anonymous}
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
        Question:
        {' '}
        {props.posts.title}
      </div>
      <div>
        Body:
        {' '}
        {props.posts.body}
      </div>
      <div>
        ID:
        {' '}
        {props.posts.id}
      </div>
      <button data-testid="edit" id="edit" type="button" onClick={handleEdit}>Edit</button>
    </div>
  );
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
      <h1 data-testid="posts"> Posts </h1>
      {displayedPosts}
    </div>
  );
}

export { Posts, PostCard };