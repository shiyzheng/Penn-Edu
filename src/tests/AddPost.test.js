/* eslint-disable no-undef */
import axios from 'axios';
import { createNewPost } from '../api/posts';

jest.mock('axios');

test('createNewPost add a new post to the classroom', async () => {
  const id = '6457624eefc745adefca6929';
  const postObject = {
    title: 'q1',
    body: 'need help',
    private: false,
    anonymous: true,
    replies: [],
  };
  const classroomData = {
    _id: id,
    posts: [],
  };

  axios.get.mockResolvedValueOnce({ data: classroomData });
  axios.put.mockResolvedValueOnce({ data: { ...classroomData, posts: [postObject] } });

  const response = await createNewPost(id, postObject);

  expect(response).toEqual({ ...classroomData, posts: [postObject] });
  expect(axios.get).toHaveBeenCalledWith(`${classroomURL}/${id}`);
  expect(axios.put).toHaveBeenCalledWith(`${classroomURL}/${id}`, { ...classroomData, posts: [postObject] });
});
