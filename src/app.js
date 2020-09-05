const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

const gogoRouter = require('./routes/gogoRoute');
const userRouter = require('./routes/userRoute');
const oAuthRouter = require('./routes/oAuthRoute');
const keys = require('./config/keys');

require('./services/passport');

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
    // secure: true,
  })
);
// Tell passport to manage cookie sessions
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use('/api/v1/gogos', gogoRouter);
app.use('/auth', oAuthRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
