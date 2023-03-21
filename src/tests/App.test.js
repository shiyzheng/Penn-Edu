/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('', () => {
  render(<App />);
  const linkElement = screen.getByText('Login');
  expect(linkElement).toBeInTheDocument();
});
