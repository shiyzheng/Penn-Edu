/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';
// import renderer from 'react-test-renderer';
import Signup from '../components/Signup';

const setLogin = () => {};
const setUsername = () => {};
const setPassword = () => {};

test('renders signup has username', () => {
  render(<Signup />, { wrapper: MemoryRouter });
  const linkElement = screen.getByLabelText('Username');

  expect(linkElement).toBeInTheDocument();
});

test('renders signup has password', () => {
  render(<Signup />, { wrapper: MemoryRouter });
  const linkElement = screen.getByLabelText('Password');

  expect(linkElement).toBeInTheDocument();
});

test('renders signup has button', () => {
  render(<Signup />, { wrapper: MemoryRouter });
  const linkElement = screen.getByTestId('button');
  expect(linkElement).toHaveClass('btn btn-primary');
  expect(linkElement).toBeInTheDocument();
});

test('renders signup button click', async () => {
  render(
    <Signup setLogin={setLogin} setUsername={setUsername} setPassword={setPassword} />,
    { wrapper: MemoryRouter },
  );
  const linkElement1 = screen.getByLabelText('Username');
  const linkElement2 = screen.getByLabelText('Password');
  const linkElement3 = screen.getByTestId('button');
  await act(async () => {
    await userEvent.type(linkElement1, 'asdzxc');
    await userEvent.type(linkElement2, 'asdasd');
  });
  expect(screen.getByDisplayValue('asdzxc')).toBeInTheDocument();
  expect(screen.getByDisplayValue('asdasd')).toBeInTheDocument();
  await act(async () => {
    await userEvent.click(linkElement3);
  });

  expect(linkElement1.value).toBe('');
  expect(linkElement2.value).toBe('');
});
