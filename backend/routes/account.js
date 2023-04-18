const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { body } = req;
  const { username, password } = body;
  try {
    // const user = await User.findOne({ username });
    // if (!user) {
    //   await User.create({ username, password });
    //   console.log(username);
    //   console.log(req.session);
    //   req.session.username = username;
    //   res.send('succesful signup');
    // } else {
    //   res.send('username taken');
    // }
    await User.create({ username, password });
    req.session.username = username;
    res.send('user creation was successful');
  } catch (e) {
    console.log(e);
    console.log('error occured');
    res.send(e);
  }
});

router.post('/login', async (req, res) => {
  const { body } = req;
  const { username, password } = body;
  try {
    const user = await User.findOne({ username });
    if (user.password === password) {
      req.session.username = username;
      res.send(`you are logged in as ${username}`);
    } else {
      throw new Error('incorrect username or password');
    }
  } catch (e) {
    res.send('error occured');
  }
});

router.post('/logout', (req, res) => {
  req.session.username = null;
  res.send('you logged out');
});

router.get('/isLogged', (req, res) => {
  res.json(req.session.username);
});

module.exports = router;
