import axios from 'axios';

export const getAllClassrooms = async () => {
  try {
    const response = await axios.get('/classroom');
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
    const response = await axios.post('/classroom/create', {
      name,
      admins,
      users,
      posts,
    });
    console.log(response);
    return response;
  } catch (err) {
    return err;
  }
};

export const getAllPostsInClassroomById = async (id) => {
  try {
    const response = await axios.get('/classroom/getId', {
      params: { id },
    });
    return response.data;
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

export const createNewPost = async (classroomId, postObject) => {
  try {
    const {
      title, body, priv, anonymous, replies,
    } = postObject;
    const response = await axios.post('/classroom/addPost', {
      title, body, priv, id: classroomId, anonymous, replies,
    });
    // console.log('a response', response.data);
    return response;
  } catch (err) {
    // console.error('error', err.message);
    return err;
  }
};
// put input post id? (:id) /${postId} /${classroomId}
export const editPost = async (
  classroomId,
  postId,
  postTitle,
  postBody,
  postAnonymous,
  postPriv,
  postReplies,
) => {
  try {
    const response = await axios.put('/classroom/editPost', {
      classroomId,
      postId,
      postTitle,
      postBody,
      postAnonymous,
      postPriv,
      postReplies,
    });
    return response;
  } catch (err) {
    return err;
  }
};
