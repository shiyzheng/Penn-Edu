import axios from 'axios';
import { rootURL } from '../utils/utils';

export const getAllPosts = async () => {
  try {
    const response = await axios.get(rootURL);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${rootURL}/${id}`);
    // console.log('a post', response.data);
    return response.data;
  } catch (err) {
    // console.error('error', err.message);
    return err;
  }
};

export const createNewPost = async (postObject) => {
  try {
    const response = await axios.post(rootURL, {
      title: postObject.title,
      body: postObject.body,
      private: postObject.private,
      anonymous: postObject.anonymous,
    });
    // console.log('a response', response.data);
    return response.data;
  } catch (err) {
    // console.error('error', err.message);
    return err;
  }
};
