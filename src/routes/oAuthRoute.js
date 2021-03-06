const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google'));

router.get('/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

router.get('/currentuser', (req, res) => {
  res.send(req.user);
});

module.exports = router;
