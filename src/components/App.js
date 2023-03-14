import './App.css';
import React, { useState, useRef } from 'react';
import ClassroomView from './ClassroomView';
import AddClassroom from './AddClassroom';

function App() {
  const [login, setLogin] = useState(false);
  const name = useRef('');

  const handleClick = (e) => {
    setLogin(!login);
  };

  const handleChange = (e) => {
    name.current = e.target.value;
  }
  if (login === false) {
    return (
      <div className='App'>
        <label>
          {' '}
          Name: 
          <input type='text' name='name' onChange={handleChange}></input>
        </label>
        <button type='button' onClick={handleClick}>Login</button>
      </div>
    );
  }
  return (
    <div className='App'>
      <label>
        {' '}
        Welcome {' '}
        {name.current}
        <button type='button' onClick={handleClick}>Logout</button>
      </label>
      <AddClassroom />
      <ClassroomView />
    </div>
  );
}

export default App;
