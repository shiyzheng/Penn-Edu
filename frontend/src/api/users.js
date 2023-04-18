import axios from 'axios';
// import { userURL } from '../utils/utils';

// export const getAllUsers = async () => {
//   try {
//     const response = await axios.get(userURL);
//     return response.data;
//   } catch (err) {
//     return err;
//   }
// };

// export const getUserById = async (id) => {
//   try {
//     const response = await axios.get(`${userURL}/${id}`);
//     // console.log('a post', response.data);
//     return response.data;
//   } catch (err) {
//     // console.error('error', err.message);
//     return err;
//   }
// };

const createUser = async (userObject) => {
  console.log('atapi');
  try {
    if (userObject.username === '' || userObject.password === '') {
      throw new Error('invalid username or password');
    }
    const response = await axios.post('/account/signup', {
      username: userObject.username,
      password: userObject.password,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.error('error', err.message);
    return err;
  }
};

export default createUser;
