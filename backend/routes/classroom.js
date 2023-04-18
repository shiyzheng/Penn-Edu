const express = require('express');

const Classroom = require('../models/classroom');
const Post = require('../models/post');

const router = express.Router();

router.post('/create', async (req, res) => {
  const { body } = req;
  const {
    name, admins, users, posts,
  } = body;
  try {
    const classroom = await Classroom.findOne({ name });
    if (!classroom) {
      await Classroom.create({
        name, admins, users, posts,
      });
      res.send('succesful classroom creation');
    } else {
      res.send('name taken');
    }
  } catch (e) {
    res.send('error occured');
  }
});

router.get('/', async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.json(classrooms);
  } catch (e) {
    res.send('error occured');
  }
});

router.get('/getId', async (req, res) => {
  const { body } = req;
  const { id } = body;
  try {
    const classroom = await Classroom.findOne({ _id: id });
    res.json(classroom.posts);
  } catch (e) {
    res.send('error occured');
  }
});

router.post('/addPost', async (req, res) => {
  const {
    title, body, priv, anonymous, replies, id,
  } = req.body;
  try {
    const classroom = await Classroom.findOne({ _id: id });
    if (classroom) {
      const newPost = new Post({
        title, body, private: priv, anonymous, replies, author: req.session.username,
      });
      classroom.post.push(newPost);
      res.send('succesful post creation');
    } else {
      res.send('classroom does not exist');
    }
  } catch (e) {
    res.send('error occured');
  }
});
