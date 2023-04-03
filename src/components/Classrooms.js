/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import AddClassroom from './AddClassroom';
import { getAllClassrooms } from '../api/posts';

function ClassroomPreview(props) {
  const { name, id } = props;
  return (
    <div>
      <Link to={`/classroom/${id}`}>{name}</Link>
    </div>
  );
}

function Classrooms(props) {
  // right after an user login in, app should direct user
  // to this page which has a list of classrooms that user is in
  const { classrooms, setClassrooms, username } = props;
  useEffect(() => {
    const getClassroomsWrapper = async () => {
      try {
        const response = await getAllClassrooms();
        // const arr = [response];
        setClassrooms(response);
      } catch (err) {
        console.error('error', err.message);
      }
    };
    getClassroomsWrapper();
  }, [classrooms.length]);

  const displayClassrooms = () => {
    const displayedClassrooms = [];
    classrooms.forEach((element) => {
      displayedClassrooms.push(
        <ClassroomPreview
          key={element.id}
          name={element.name}
          id={element.id}
        />,
      );
    });
    return displayedClassrooms;
  };

  const displayedClassrooms = displayClassrooms();

  return (
    <div>
      <Link to="/">Home</Link>
      <AddClassroom setClassrooms={setClassrooms} username={username} />
      <br />
      {displayedClassrooms}
    </div>
  );
}

export default Classrooms;
