/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Classrooms from '../components/Classrooms';

const setClassrooms = () => {};
const username = 'asd';
const classrooms = [
  {
    id: 1,
    name: 'classroom 1',
    admins: [
      'username',
    ],
    users: [
      'username',
    ],
    posts: [
      {
        id: 1,
        title: 'hw3 q5 help',
        body: 'help',
        private: true,
        anonymous: false,
        replies: [],
      },
      {
        id: 2,
        title: 'hw1 q7 help',
        body: 'help',
        private: true,
        anonymous: false,
        replies: [],
      },
    ],
  },
  {
    name: 'asd',
    admins: [
      'asd',
    ],
    users: [
      'asd',
    ],
    posts: [],
    id: 2,
  },
  {
    name: 'classroom 2',
    admins: [
      'asd',
    ],
    users: [
      'asd',
    ],
    posts: [],
    id: 3,
  },
];

test('renders classrooms', () => {
  render(
    <Classrooms classrooms={classrooms} setClassrooms={setClassrooms} username={username} />,
    { wrapper: MemoryRouter },
  );
  const linkElement1 = screen.getByRole('link', { name: 'classroom 1' });
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByRole('link', { name: 'asd' });
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByRole('link', { name: 'classroom 2' });
  expect(linkElement3).toBeInTheDocument();
});
