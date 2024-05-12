const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const { authentication } = require('../middleware/authentication.js');

router.get('/onlineusers', UserController.onlineUsers);
router.get('/confirm/:emailToken', UserController.confirmUser);
router.get('/id/:_id', UserController.userFindById);
router.get('/logout/:_id', authentication, UserController.logout);
router.post('/', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
