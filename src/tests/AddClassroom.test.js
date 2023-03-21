/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import AddClassroom from '../components/AddClassroom';

test('', () => {
  render(<AddClassroom />);

  //   const linkElement = screen.getByRole('button', { name: /Add Classroom/i });
  //   expect(linkElement).toBeInTheDocument();
  const linkElement = screen.getByText('Add Classroom');
  expect(linkElement).toBeInTheDocument();
});
