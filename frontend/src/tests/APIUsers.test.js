/* eslint-disable no-undef */
import { getAllUsers, getUserById } from '../api/users';

test('getAllUsers', async () => {
  const data = await getAllUsers();
  expect(data[0].username).toBe('username');
  expect(data[0].password).toBe('password');
//   expect(data.length).toBe(10);
});

test('getUserById', async () => {
  const data = await getUserById(2);
  expect(data.username).toBe('asd123');
  expect(data.password).toBe('asdasd');
  //   expect(data.length).toBe(10);
});
