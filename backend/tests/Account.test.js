/* eslint-disable no-undef */
const request = require('supertest');
const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');
const AccountRouter = require('../routes/account');

const app = express();
app.use(express.json());
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://ansonyan:123@cluster0.iujmqvi.mongodb.net/?retryWrites=true&w=majority';
app.use(cookieSession({
  name: 'session',
  keys: ['pineapple'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));
app.use('/account', AccountRouter);

describe('account tests', () => {
  beforeAll(async () => {
    await mongoose.disconnect();
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });

  test('POST /signup should return an error if there is an exception', async () => {
    const res = await request(app)
      .post('/account/signup')
      .send({ username: null, password: null });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(expect.stringContaining('error occured'));
  });

  test('POST /login should log in a user', async () => {
    const res = await request(app)
      .post('/account/login')
      .send({ username: 'newuser', password: 'password' });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('you are logged in');
  });

  test('POST /login should not log in a user with incorrect password', async () => {
    const res = await request(app)
      .post('/account/login')
      .send({ username: 'newuser', password: 'wrongpassword' });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('wrong password');
  });

  test('POST /login should return an error if there is an exception', async () => {
    const res = await request(app)
      .post('/account/login')
      .send({ username: null, password: null });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(expect.stringContaining('error occurred'));
  });

  test('POST /login should not log in a non-existent user', async () => {
    const res = await request(app)
      .post('/account/login')
      .send({ username: 'nonexistentuser', password: 'password' });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('error occurred');
  });

  test('POST /logout should log out a user', async () => {
    const res = await request(app)
      .post('/account/logout');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('you logged out');
  });
});
