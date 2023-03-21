/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
// import renderer from 'react-test-renderer';
import PostSearchBar from '../components/PostSearchBar';

test('renders postsearchbar has input', () => {
  render(<PostSearchBar />);
  const linkElement = screen.getByPlaceholderText('Search');

  expect(linkElement).toBeInTheDocument();
});
