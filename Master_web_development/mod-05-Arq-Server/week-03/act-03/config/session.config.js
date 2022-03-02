const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

module.exports = session({
    secret: process.env.SESSION_SECRET || 'super secret (change it)',
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: "none",
      secure: process.env.SESSION_SECURE || false,
      httpOnly: true,
      maxAge: process.env.SESSION_MAX_AGE || 3600000,
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: process.env.SESSION_MAX_AGE || 3600,
    })
  });