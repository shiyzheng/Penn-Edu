/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import './components/App.css';
// import {
//   BrowserRouter as Router, Link, Route, Routes,
// } from 'react-router-dom';
// import React from 'react';
// import ClassroomView from './components/ClassroomView';
// // import AddClassroom from './components/AddClassroom';
// import Login from './components/Login';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li key="login"><Link to="/login">Login</Link></li>
//             <li key="signup"><Link to="/signup">{'Don\'t have an account? Sign up!'}</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" render={() => (<Login />)} />
//           <Route path="/posts" render={() => <ClassroomView />} />
//         </Routes>
//       </div>
//       {/* <Login /> */}
//       {/* <AddClassroom /> */}
//       {/* <ClassroomView /> */}
//     </Router>
//   );
// }

// export default App;
import './components/App.css';
import React, { useState } from 'react';
// import axios from 'axios';
import { useRoutes, Link } from 'react-router-dom';
import ClassroomView from './components/ClassroomView';
import AddClassroom from './components/AddClassroom';
import Login from './components/Login';
import Classrooms from './components/Classrooms';
import Signup from './components/Signup';

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [classrooms, setClassrooms] = useState([]);
  // const name = useRef('');

  // const checkLogged = async () => {
  //   try {
  //     const log = await axios.get('/account/isLogged');
  //     setLogin(log);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // checkLogged();
  // console.log('a');
  const element = useRoutes([{ path: '/', element: <Home login={login} /> },
    { path: '/Login', element: <Login setLogin={setLogin} /> },
    { path: '/Signup', element: <Signup setLogin={setLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} login={login} /> },
    { path: '/Home', element: <Classrooms classrooms={classrooms} setClassrooms={setClassrooms} /> },
    { path: '/Classroom', element: <ClassroomView /> },
    { path: '/AddClassroom', element: <AddClassroom /> },
  ]);
  return element;

  // const handleClick = () => {
  //   setLogin(!login);
  // };

  // const handleChange = (e) => {
  //   name.current = e.target.value;
  // };
  // if (login === false) {
  //   return (
  //     <div className="App">
  //       <label>
  //         {' '}
  //         Name:
  //         <input type="text" name="name" onChange={handleChange} />
  //       </label>
  //       <button type="button" onClick={handleClick}>Login</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div className="App">
  //     <label>
  //       {' '}
  //       Welcome
  //       {' '}
  //       {' '}
  //       {name.current}
  //       <button type="button" onClick={handleClick}>Logout</button>
  //     </label>
  //     <AddClassroom />
  //     <ClassroomView />
  //   </div>
  // );
}
function Home(props) {
  // console.log('homepage');
  const { login } = props;
  return (
    <div>
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
          <Link to="/home">Classrooms</Link>
        </div>
      )}
    </div>
  );
}
export default App;
