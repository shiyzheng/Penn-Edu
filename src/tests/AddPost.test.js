/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderer, { act } from 'react-test-renderer';
// import { test, expect } from '@testing-library/jest-dom';
// import React from 'react';
// import AddPost from '../components/AddPost';

// const posts = [
//   {
//     id: 1,
//     title: 'hw3 q5 help',
//     body: 'help',
//     private: true,
//     anonymous: false,
//   },
//   {
//     id: 2,
//     title: 'hw1 q7 help',
//     body: 'help',
//     private: true,
//     anonymous: false,
//   },
//   {
//     id: 3,
//     title: 'hw5 q5 help',
//     body: 'help',
//   },
//   {
//     id: 4,
//     title: 'hw3 q1 help',
//     body: 'help',
//   },
//   {
//     title: 'hw1 q1 help',
//     body: 'help',
//     id: 5,
//   },
// ];

// const setPosts = () => {};

// test('renders addPost has private', () => {
//   render(<AddPost />);
//   const linkElement = screen.getByLabelText('Private');

//   expect(linkElement).toBeInTheDocument();
// });

// test('renders addPost has anonymous', () => {
//   render(<AddPost />);
//   const linkElement = screen.getByLabelText('Anonymous');

//   expect(linkElement).toBeInTheDocument();
// });

// test('renders addPost has title', () => {
//   render(<AddPost />);
//   const linkElement = screen.getByLabelText('Title');
//   expect(linkElement).toBeInTheDocument();
// });
// test('renders addPost has id', () => {
//   render(<AddPost />);
//   const linkElement = screen.getByTestId('body');

//   expect(linkElement).toBeInTheDocument();
// });
// test('renders addPost matches snapshot', () => {
//   const component = renderer.create(<AddPost />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('renders addPost has form-group', () => {
//   render(<AddPost />);
//   const linkElement = screen.getByTestId('form-group');
//   expect(linkElement).toHaveClass('form-group');
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders addPost has button', () => {
//   render(<AddPost />);
//   const linkElement = screen.getByTestId('button');
//   expect(linkElement).toHaveClass('btn btn-primary');
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders addPost button click', async () => {
//   render(<AddPost posts={posts} addNewPost={setPosts} />);
//   const linkElement1 = screen.getByLabelText('Title');
//   const linkElement2 = screen.getByTestId('body');
//   const linkElement3 = screen.getByRole('button', { name: /Create Post/ });
//   expect(linkElement2).toBeInTheDocument();
//   await act(async () => {
//     await userEvent.type(linkElement1, 'asd');
//     await userEvent.type(linkElement2, 'need help for this question');
//   });
//   expect(screen.getByDisplayValue('asd')).toBeInTheDocument();
//   expect(screen.getByDisplayValue('need help for this question')).toBeInTheDocument();
//   await act(async () => {
//     await userEvent.click(linkElement3);
//   });

//   expect(linkElement1.value).toBe('');
//   expect(linkElement2.value).toBe('');
// });
import axios from 'axios';
import { createNewPost } from '../api/posts';

jest.mock('axios');

test('createNewPost add a new post to the classroom', async () => {
  const id = '5';
  const postObject = {
    title: 'q1',
    body: 'need help',
    private: false,
    id: '6',
    anonymous: true,
    replies: [],
  };
  const classroomData = {
    id,
    posts: [],
  };

  axios.get.mockResolvedValueOnce({ data: classroomData });
  axios.put.mockResolvedValueOnce({ data: { ...classroomData, posts: [postObject] } });

  const response = await createNewPost(id, postObject);

  expect(response).toEqual({ ...classroomData, posts: [postObject] });
  expect(axios.get).toHaveBeenCalledWith(`${classroomURL}/${id}`);
  expect(axios.put).toHaveBeenCalledWith(`${classroomURL}/${id}`, { ...classroomData, posts: [postObject] });
});
