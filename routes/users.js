const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();


router.get('/onlineusers',UserController.onlineUsers);
router.get('/confirm/:emailToken', UserController.confirmUser);
router.get('/id/:_id', UserController.userById);
router.post('/',UserController.register);
router.post('/login',UserController.login);

module.exports = router;