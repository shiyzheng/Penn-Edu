/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('', () => {
  render(<App />, { wrapper: MemoryRouter });
  const linkElement = screen.getByText('Login');
  expect(linkElement).toBeInTheDocument();
});
