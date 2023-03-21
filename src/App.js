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
import React, { useState, useRef } from 'react';
import ClassroomView from './components/ClassroomView';
import AddClassroom from './components/AddClassroom';

function App() {
  const [login, setLogin] = useState(false);
  const name = useRef('');

  const handleClick = () => {
    setLogin(!login);
  };

  const handleChange = (e) => {
    name.current = e.target.value;
  };
  if (login === false) {
    return (
      <div className="App">
        <label>
          {' '}
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="button" onClick={handleClick}>Login</button>
      </div>
    );
  }
  return (
    <div className="App">
      <label>
        {' '}
        Welcome
        {' '}
        {' '}
        {name.current}
        <button type="button" onClick={handleClick}>Logout</button>
      </label>
      <AddClassroom />
      <ClassroomView />
    </div>
  );
}

export default App;
