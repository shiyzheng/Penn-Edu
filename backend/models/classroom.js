const mongoose = require('mongoose');
// const postSchema = require('./post');

const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  body: { type: String, required: true },
  private: { type: Boolean, required: true },
  anonymous: { type: Boolean, required: true },
  replies: [{ type: String }],
});

const classroomSchema = new Schema({
  name: { type: String, required: true },
  admins: [{ type: String }],
  users: [{ type: String, required: true }],
  posts: [postSchema],
  // posts: [{ type: Object }],
});

const Classroom = model('Classroom', classroomSchema);

module.exports = Classroom;
