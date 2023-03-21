/* eslint-disable no-undef */
// import { test, expect } from '@testing-library/jest-dom';
import { getAllPosts, getPostById } from '../api/posts';

test('getAllPosts', async () => {
  const data = await getAllPosts();
  expect(data[0].title).toBe('hw3 q5 help');
  expect(data[0].body).toBe('help');
  expect(data[0].private).toBe(true);
  expect(data[0].anonymous).toBe(false);
  expect(data.length).toBe(10);
});

test('getPostById', async () => {
  const data = await getPostById(2);
  expect(data.title).toBe('hw1 q7 help');
  expect(data.body).toBe('help');
  expect(data.private).toBe(true);
  expect(data.anonymous).toBe(false);
});
