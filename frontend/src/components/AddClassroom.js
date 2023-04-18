/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { createNewClassroom } from '../api/posts';

function AddClassroom(props) {
  const { setClassrooms, username } = props;
  const [classroomName, setClassroomName] = useState('');
  const handleClassroomNameChange = (e) => {
    setClassroomName(e.target.value);
  };

  const add = (e) => {
    try {
      e.preventDefault();
      const classroomObject = {
        name: classroomName,
        users: [username],
        admins: [username],
        posts: [],
      };
      createNewClassroom(classroomObject);
      setClassrooms([]);
      const form = document.getElementById('add');
      form.reset();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {' '}
      <form id="add" className="mx-auto" style={{ width: '800px' }}>
        <div className="form-group">
          <label className="form-check-label" htmlFor="Title">
            Classroom Name
            <input type="text" className="form-control" id="Title" onChange={handleClassroomNameChange} />
          </label>
        </div>

        <div className="form-row">
          <button
            onClick={add}
            type="submit"
            className="btn btn-primary"
            data-testid="button"
          >
            Create Classroom
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddClassroom;
