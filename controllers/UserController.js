const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js');

const UserController = {
	async register(req, res) {
		try {
			if (req.body.username == '' || req.body.email == '' || req.body.password == '' || req.body.birthday == '') {
				res.send({ msg: 'Please fill out all required fields.' });
			}
			const user = await User.create(req.body);
			res.status(201).send({ msg: 'User created', user });
		} catch (error) {
			console.error(error);
			switch (true) {
				case error.keyPattern['email']:
					res.status(400).send({ msg: 'The email has already been used', error });
					break;
				case error.keyPattern['username']:
					res.status(400).send({ msg: 'The username has already been used', error });
					break;
				default:
					res.status(500).send({ msg: 'Server error', error });
					break;
			}
		}
	},
	async login(req, res) {
		try {
			const user = await User.findOne({
				email: req.body.email,
			});
			const token = {
				token: jwt.sign({ _id: user._id }, jwt_secret),
				userAgent: req.headers['user-agent'],
			};
			if (user.tokens.length > 4) user.tokens.shift();
			user.tokens.push(token);
			user.online = true;
			await user.save();
			res.send({ msg: `Welcome ${user.name.first}`, user, token });
		} catch (error) {
			console.error(error);
		}
	},
	async onlineUsers(req, res) {
		const users = await User.find({ online: true });
		res.send({ msg: 'Online users', users });
	},
};

module.exports = UserController;
