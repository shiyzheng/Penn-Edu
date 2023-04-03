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
      {/* <button className="btn" onClick={() => navigate('/')}>Home</button> */}
      <h2>Signup</h2>
      <label>Username</label>
      <br />
      <input onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password</label>
      <br />
      <input onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
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
      <Link to="/home">Home</Link>
    </div>
  );
}

export default Signup;
