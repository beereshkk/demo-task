const User = require('../models/user');

const usersController = {};

usersController.register = (req, res) => {
  const body = req.body;
  const user = new User(body);

  User.findOne({ email: body.email })
    .then((savedUser) => {
      if (savedUser === null) {
        return user.validate();
      } else {
        return Promise.reject({
          message: 'This Email id is already registered',
        });
      }
    })
    .then(() => {
      return user.encryptPassword();
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(403).json(err);
    });
};

usersController.login = (req, res) => {
  const body = req.body;
  User.findOne({ email: body.email })
    .then((user) => {
      if (!user) {
        return Promise.reject({ message: 'Invalid email or password' });
      } else {
        return user.verifyPassword(body.password);
      }
    })
    .then((user) => {
      if (user) {
        const token = user.generateToken();
        res.json({ token });
      }
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

usersController.account = (req, res) => {
  const user = req.user;
  const details = {
    email: user.email,
    name: user.name,
  };
  res.json(details);
};

module.exports = usersController;
