const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  body: { type: String, required: true },
  private: { type: Boolean, required: true },
  anonymous: { type: Boolean, required: true },
  replies: [{ type: String }],
});

const Post = model('Post', postSchema);

module.exports = Post;
