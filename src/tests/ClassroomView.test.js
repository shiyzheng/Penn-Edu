/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ClassroomView from '../components/ClassroomView';

// const setClassrooms = () => {};

test('renders classroomview', () => {
  render(
    <MemoryRouter>
      <ClassroomView />
    </MemoryRouter>,
  );
});
