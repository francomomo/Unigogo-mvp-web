const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleID: {
    type: String,
  },
  name: {
    type: String,
    // required: [true, 'A user must have a name'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
