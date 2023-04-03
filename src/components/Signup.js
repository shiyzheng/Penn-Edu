/* eslint-disable react/prop-types */
import React from 'react';
import {
  Link, useNavigate,
} from 'react-router-dom';
import { createUser } from '../api/users';

function Signup(props) {
  // signup page
  const {
    setLogin, setUsername, setPassword, username, password, login,
  } = props;

  if (login) {
    useNavigate('/');
  }

  return (
    <div className="container">
      <Link to="/home">Home</Link>
      <form id="add" className="mx-auto" style={{ width: '800px' }}>
        <h2>Signup</h2>
        <div className="form-group">
          <label className="form-check-label" htmlFor="Username">
            Username
            <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
        </div>
        <div className="form-group">
          <label className="form-check-label" htmlFor="Password">
            Password
            <input type="text" className="form-control" id="username" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            setLogin(true);
            createUser({ username, password });
          }}
          type="submit"
        >
          Submit
        </button>
        <br />
        <p>
          {'Already have an account? '}
          <Link to="/login">Log in here!</Link>
        </p>
      </form>
      {login && (
        <div>
          You are now logged in. Head back to home to view the classrooms.
        </div>
      )}
    </div>
  );
}

export default Signup;
