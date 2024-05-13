const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const { authentication } = require('../middleware/authentication.js');

router.get('/onlineusers', UserController.allOnlineUsers);
router.get('/getonline/:_id', UserController.getOnline);
router.get('/confirm/:emailToken', UserController.confirmUser);
router.get('/id/:_id', UserController.userFindById);
router.delete('/logout/:_id', authentication, UserController.logout);
router.post('/', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
