/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import createNewPost from '../api/posts';

function AddPost(props) {
  const { posts, addNewPost } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priv, setPriv] = useState(false);

  const [anon, setAnon] = useState(false);

  const [id, setId] = useState(1);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      id,
      private: priv,
      anonymous: anon,
      replies: [],
    };
    setId(id + 1);
    const form = document.getElementById('add');
    form.reset();
    addNewPost([...posts, newPost]);
  };

  // useEffect(() => {
  //   async function createNewPostWrapper() {
  //     const newPost = {
  //       title,
  //       body,
  //       id,
  //       private: priv,
  //       anonymous: anon,
  //     };
  //     const response = await createNewPost(newPost);
  //     // console.log('new post', response);
  //     return response;
  //   }
  //   createNewPostWrapper();
  // }, [posts]);

  return (
    <div>
      {' '}
      <form id="add" className="mx-auto" style={{ width: '800px' }}>
        <div className="form-group">
          <label className="form-check-label" htmlFor="Title">
            Title
            <input type="text" className="form-control" id="Title" onChange={handleTitleChange} />
          </label>
        </div>

        <div className="form-group" data-testid="form-group">
          <div className="input-group-prepend" />
          <textarea
            className="form-control"
            aria-label="With textarea"
            data-testid="body"
            onChange={handleBodyChange}
          />
        </div>

        <div className="form-row">
          <div className="form-check col-md-4">
            <label className="form-check-label" htmlFor="Private">
              Private
              <input
                className="form-check-input"
                type="checkbox"
                id="Private"
                onClick={() => setPriv(!priv)}
              />
            </label>
          </div>
          <div className="form-check col-md-6 ">
            <label className="form-check-label" htmlFor="Anonymous">
              Anonymous
              <input
                className="form-check-input"
                type="checkbox"
                id="Anonymous"
                onClick={() => setAnon(!anon)}
              />
            </label>
          </div>
          <button
            onClick={handleOnSubmit}
            type="submit"
            className="btn btn-primary"
            data-testid="button"
          >
            Create Post

          </button>
        </div>

      </form>
    </div>
  );
}

export default AddPost;
