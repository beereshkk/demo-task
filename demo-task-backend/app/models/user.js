const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: function (value) {
        return isEmail(value);
      },
      message: function () {
        return 'Invalid Email Format';
      },
    },
  },
  password: {
    type: String,
    required: [true, 'Password is a required field'],
    minlength: [8, 'Password cant be less than 8 chars'],
    maxlength: [64, 'Password cant be more than 64 chars'],
  },
});

userSchema.methods.encryptPassword = function () {
  const user = this;
  return bcrypt.genSalt().then((salt) => {
    return bcrypt.hash(user.password, salt).then((encryptedpwd) => {
      user.password = encryptedpwd;
      return user.save();
    });
  });
};

userSchema.methods.verifyPassword = function (password) {
  const user = this;
  return bcrypt.compare(password, user.password).then((match) => {
    if (match) {
      return Promise.resolve(user);
    } else {
      return Promise.reject({ message: 'Invalid email or password' });
    }
  });
};

userSchema.methods.generateToken = function () {
  const user = this;
  const tokenData = {
    _id: user._id,
    email: user.username,
    name: user.name,
  };
  const token = jwt.sign(tokenData, 'dashboard@task', {
    expiresIn: '2d',
  });
  return token;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
