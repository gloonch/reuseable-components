const express = require('express')
const usersController = require('../controllers/UserController')
const router = express.Router();

router.post('/signup', usersController.signUp);
router.post('/login', usersController.login);
router.get('/user', usersController.verifyToken, usersController.getUser);
// verify token after building the frontend

module.exports = router;