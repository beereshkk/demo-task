const express = require('express');
const usersController = require('../app/controllers/usersController');
const { authenticateUser } = require('../app/middlewares/authentication');
const router = express.Router();

router.post('/users/register', usersController.register);
router.post('/users/login', usersController.login);
router.get('/users/account', authenticateUser, usersController.account);

module.exports = router;
