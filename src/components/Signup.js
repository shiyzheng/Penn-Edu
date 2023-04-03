/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Routes, Route, Outlet, Link, useNavigate, redirect,
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
          createUser({ username, password });
          setLogin(true);
          console.log(login);
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
    </div>
  );
}

export default Signup;
