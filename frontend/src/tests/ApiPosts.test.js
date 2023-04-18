/* eslint-disable no-undef */
// import { test, expect } from '@testing-library/jest-dom';
import axios from 'axios';
import {
  createNewClassroom,
} from '../api/posts';

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

test('createNewClassroom create a new classroom', async () => {
  const classroomObject = {
    name: 'Cis 350',
    admins: ['1'],
    users: ['1', '2'],
    posts: [],
  };
  const newClassroom = { ...classroomObject, id: 3 };
  axios.post.mockResolvedValueOnce({ data: newClassroom });

  const result = await createNewClassroom(classroomObject);

  expect(axios.post).toHaveBeenCalledWith('/api/classrooms', classroomObject);
  expect(result).toEqual(newClassroom);
});

test('createNewClassroom return an error if API call fails', async () => {
  const classroomObject = {
    name: 'Cis 350',
    admins: ['1'],
    users: ['1', '2'],
    posts: [],
  };
  const error = new Error('Network Error');
  axios.post.mockRejectedValueOnce(error);

  const result = await createNewClassroom(classroomObject);

  expect(axios.post).toHaveBeenCalledWith('/api/classrooms', classroomObject);
  expect(result).toEqual(error);
});
