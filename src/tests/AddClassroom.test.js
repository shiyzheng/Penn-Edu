/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import AddClassroom from '../components/AddClassroom';

const setClassrooms = () => {};

const alwaysTrue = true;

test('renders addclassroom has button', () => {
  render(<AddClassroom login={alwaysTrue} />);
  const linkElement = screen.getByTestId('button');
  expect(linkElement).toHaveClass('btn btn-primary');
  expect(linkElement).toBeInTheDocument();
});

test('renders addclassroom button click', async () => {
  render(<AddClassroom setClassrooms={setClassrooms} login={alwaysTrue} />);
  const linkElement1 = screen.getByLabelText('Classroom Name');
  const linkElement2 = screen.getByTestId('button');
  await act(async () => {
    await userEvent.type(linkElement1, 'Classroom 1');
  });
  expect(screen.getByDisplayValue('Classroom 1')).toBeInTheDocument();
  await act(async () => {
    await userEvent.click(linkElement2);
  });
  expect(linkElement1.value).toBe('');
  expect(linkElement2.value).toBe('');
});
