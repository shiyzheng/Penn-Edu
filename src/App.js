/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './components/App.css';
import React, { useState, useEffect } from 'react';
import {
  useRoutes,
  Link,
} from 'react-router-dom';
import axios from 'axios';
import ClassroomView from './components/ClassroomView';
import Login from './components/Login';
import Classrooms from './components/Classrooms';
import Signup from './components/Signup';

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      const check = async () => {
        const user = await axios.get('/account/isLogged');
        if (user.data == null || user.data === '') {
          setLogin(false);
        } else {
          setUsername(user.data);
          setLogin(true);
        }
      };
      check();
    }, 2000);
    return () => clearInterval(intervalID);
  }, []);

  const logout = async () => {
    await axios.post('/account/logout');
    setUsername('');
    setLogin(false);
  };

  const element = useRoutes([{ path: '/', element: <Home login={login} username={username} logout={logout} /> },
    { path: '/Login', element: <Login setLogin={setLogin} login={login} setUsername={setUsername} setPassword={setPassword} username={username} password={password} /> },
    { path: '/Signup', element: <Signup setLogin={setLogin} login={login} setUsername={setUsername} setPassword={setPassword} username={username} password={password} /> },
    { path: '/Home', element: <Classrooms login={login} classrooms={classrooms} setClassrooms={setClassrooms} username={username} /> },
    { path: '/Classroom/:id', element: <ClassroomView login={login} username={username} /> },
  ]);
  return element;
}

function Home(props) {
  // console.log('homepage');
  const { login, username, logout } = props;
  return (
    <div className="container">
      {!login && (
        <div>
          {' '}
          Home Page
          <br />
          <Link to="/login">Login</Link>
          <br />
          <Link to="/signup">Signup</Link>
          <br />
        </div>
      )}
      {login && (
        <div>
          <div>
            Welcome
            {' '}
            {username}
          </div>
          <button className="btn btn-outline-danger float-right" type="button" onClick={() => logout()}>Logout</button>
          <Link to="/home">Classrooms</Link>
        </div>
      )}
    </div>
  );
}
export default App;
