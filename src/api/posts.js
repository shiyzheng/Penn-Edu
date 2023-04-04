import axios from 'axios';
import { classroomURL } from '../utils/utils';

export const getAllClassrooms = async () => {
  try {
    const response = await axios.get(classroomURL);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const createNewClassroom = async (classroomObject) => {
  try {
    const {
      name, admins, users, posts,
    } = classroomObject;
    const response = await axios.post(classroomURL, {
      name,
      admins,
      users,
      posts,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getAllPostsInClassroomById = async (id) => {
  try {
    const response = await axios.get(`${classroomURL}/${id}`);
    return response.data.posts;
  } catch (err) {
    return err;
  }
};

// export const getPostById = async (id) => {
//   try {
//     const response = await axios.get(${rootURL}/${id});
//     // console.log('a post', response.data);
//     return response.data;
//   } catch (err) {
//     // console.error('error', err.message);
//     return err;
//   }
// };

export const createNewPost = async (id, postObject) => {
  try {
    const classroom = await axios.get(`${classroomURL}/${id}`);
    classroom.data.posts.push({
      title: postObject.title,
      body: postObject.body,
      private: postObject.private,
      id: postObject.id,
      anonymous: postObject.anonymous,
      replies: postObject.replies,
    });
    const response = await axios.put(`${classroomURL}/${id}`, classroom.data);
    // console.log('a response', response.data);
    return response.data;
  } catch (err) {
    // console.error('error', err.message);
    return err;
  }
};
