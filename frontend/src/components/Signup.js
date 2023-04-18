/* eslint-disable react/prop-types */
import React from 'react';
import {
  Link, useNavigate,
} from 'react-router-dom';
import axios from 'axios';
// import createUser from '../api/users';

function Signup(props) {
  // signup page
  const {
    setLogin, setUsername, setPassword, username, password, login,
  } = props;

  const navigate = useNavigate();

  if (login) {
    navigate('/');
  }

  const createUser = async (userObject) => {
    // console.log('atapi');
    try {
      // if (userObject.username === '' || userObject.password === '') {
      //   throw new Error('invalid username or password');
      // }
      const response = await axios.post('/account/signup', {
        username: userObject.username,
        password: userObject.password,
      });
      // console.log(response);
      if (response.data === 'user creation failed') {
        throw new Error('user creation failed');
      }
      navigate('/');
    } catch (err) {
      console.error('error', err.message);
      alert('user signup failed');
    }
  };

  return (
    <div className="container">
      <Link to="/home">Home</Link>
      <form id="add" className="mx-auto" style={{ width: '800px' }}>
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="Username">
            Username
            <input type="text" className="form-control" id="Username" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="Password">
            Password
            <input type="text" className="form-control" id="Password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
        </div>
        <button
          className="btn btn-primary"
          data-testid="button"
          onClick={(e) => {
            e.preventDefault();
            setLogin(true);
            createUser({ username, password });
            const form = document.getElementById('add');
            form.reset();
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