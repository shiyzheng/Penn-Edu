/* eslint-disable no-undef */
import { getCurrentUser } from '../api/users';

test('getCurrentUser', async () => {
  const data = await getCurrentUser();
  expect(data.username).toBe(undefined);
});
