/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function AddPost(props) {
  // const { addNewPost, posts } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priv, setPriv] = useState(false);

  const [anon, setAnon] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title, body, private: priv, anonymous: anon,
    };

    const form = document.getElementById('add');
    form.reset();
    setTitle('');
    setBody('');
    props.addNewPost([...props.posts, newPost]);
  };

  return (
    <div>
      {' '}
      <form id="add" className="mx-auto" style={{ width: '800px' }}>
        <div className="form-group">
          <label className="form-check-label" htmlFor="Title">Title</label>
          <input type="text" className="form-control" id="Title" onChange={(e) => setTitle(e.target.value)} />

        </div>

        <div className="form-group" data-testid="form-group">
          <div className="input-group-prepend" />
          <textarea className="form-control" aria-label="With textarea" data-testid="body" onChange={(e) => setBody(e.target.value)} />
        </div>

        <div className="form-row">
          <div className="form-check col-md-4">
            <input className="form-check-input" type="checkbox" id="Private" onClick={() => setPriv(!priv)} />
            <label className="form-check-label" htmlFor="Private">
              Private
            </label>
          </div>
          <div className="form-check col-md-6 ">
            <input className="form-check-input" type="checkbox" id="Anonymous" onClick={() => setAnon(!anon)} />
            <label className="form-check-label" htmlFor="Anonymous">

              Anonymous
            </label>
          </div>
          <button onClick={handleOnSubmit} type="submit" className="btn btn-primary" data-testid="button">Create Post</button>
        </div>

      </form>
    </div>
  );
}

export default AddPost;
