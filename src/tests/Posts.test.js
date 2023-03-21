/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-test-renderer';
// import { PostCard } from '../components/Posts';
import { Posts, PostCard } from '../components/Posts';
// import renderer from 'react-test-renderer';
// import PostSearchBar from '../components/PostSearchBar';

const posts = [
  {
    id: 1,
    title: 'hw3 q5 help',
    body: 'help',
    private: true,
    anonymous: false,
  },
  {
    id: 2,
    title: 'hw1 q7 help',
    body: 'help',
    private: true,
    anonymous: false,
  },
  {
    id: 3,
    title: 'hw5 q5 help',
    body: 'help',
  },
  {
    id: 4,
    title: 'hw3 q1 help',
    body: 'help',
  },
  {
    title: 'hw1 q1 help',
    body: 'help',
    id: 5,
  },
];

test('renders posts has heading', () => {
  render(<Posts posts={posts} />);
  const linkElement = screen.getByText('Posts');

  expect(linkElement).toBeInTheDocument();
});

test('renders posts has edit', () => {
  render(<PostCard posts={posts} />);
  const linkElement = screen.getByText('Edit', { selector: 'button' });

  expect(linkElement).toBeInTheDocument();
});
