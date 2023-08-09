const express = require('express')
const usersController = require('../controllers/UserController')
const router = express.Router();

router.post('/signup', usersController.signUp);
router.post('/login', usersController.login);
router.get('/user', usersController.verifyToken, usersController.getUser);
router.get('/refresh', usersController.refreshToken, usersController.verifyToken, usersController.getUser)
router.post('/logout', usersController.verifyToken, usersController.logout)
module.exports = router;