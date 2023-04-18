const mongoose = require('mongoose');
const Post = require('./post');

const { Schema, model } = mongoose;

const classroomSchema = new Schema({
  name: { type: String, required: true },
  admins: [{ type: String }],
  author: { type: String, required: true },
  posts: [Post],
});

const Classroom = model('Classroom', classroomSchema);

module.exports = Classroom;
