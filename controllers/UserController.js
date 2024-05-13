const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/keys.js');
const transporter = require('../config/nodemailer.js');

const UserController = {
	async register(req, res) {
		try {
			if (req.body.username == '' || req.body.email == '' || req.body.password == '' || req.body.birthday == '') {
				res.send({ msg: 'Please fill out all required fields.' });
			}
			const password = await bcrypt.hash(req.body.password, 10);
			const user = await User.create({ ...req.body, password, role: 'user', emailConfirmed: false });
			const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, { expiresIn: '48h' });
			const url = 'http://localhost:3001/users/confirm/' + emailToken;
			await transporter.sendMail({
				to: req.body.email,
				subject: 'Please confirm your email.',
				html: `<h3> Welcome to NeverBoringNetwork, only one step more to enjoy!</h3>
				<a href=${url}>Click to confirm your email</a>`,
			});
			res.status(201).send({ msg: `The user's email must be confirmed.`, user });
		} catch (error) {
			console.error(error);
			switch (true) {
				case error.keyPattern['email']:
					res.status(400).send({ msg: 'The email has already been used.', error });
					break;
				case error.keyPattern['username']:
					res.status(400).send({ msg: 'The username has already been used.', error });
					break;
				default:
					res.status(500).send({ msg: 'Server error.', error });
					break;
			}
		}
	},
	async confirmUser(req, res) {
		try {
			const emailToken = req.params.emailToken;
			const payload = jwt.verify(emailToken, jwt_secret);
			await User.updateOne({ email: payload.email }, { $set: { emailConfirmed: true } });
			res.status(201).send({ msg: 'User email was confirmed.' });
		} catch (error) {
			console.error(error);
			res.status(500).send(error);
		}
	},
	async login(req, res) {
		try {
			const user = await User.findOne({
				email: req.body.email,
			});
			if (!user) {
				return res.status(400).send({ msg: 'Email or password are wrong.' });
			}
			const isMatch = await bcrypt.compare(req.body.password, user.password);
			if (!isMatch) {
				return res.status(400).send({ msg: 'Email or password are wrong.' });
			}
			const token = {
				token: jwt.sign({ _id: user._id }, jwt_secret),
				userAgent: req.headers['user-agent'],
			};
			if (user.tokens.length > 4) user.tokens.shift();
			user.tokens.push(token);
			await user.save();
			res.send({ msg: `Welcome ${user.name.first}.`, user, token });
		} catch (error) {
			console.error(error);
			res.status(500).send(error);
		}
	},
	async allOnlineUsers(req, res) {
		try {
			const users = await User.find({ online: true });
			res.send({ msg: 'Online users', users });
		} catch (error) {
			console.error(error);
			res.status(500).send({ msg: 'Server error.', error });
		}
	},
	async userFindById(req, res) {
		try {
			const user = await User.findOne({ _id: req.params._id });
			res.send({ msg: `User with id: ${req.params._id} was found.`, user });
		} catch (error) {
			console.error(error);
			res.status(500).send({ msg: `The user with id: ${error.value} does not exist in the database.`, error });
		}
	},
	async logout(req, res) {
		try {
			const user = await User.findByIdAndUpdate(
				{ _id: req.params._id },
				{ $pull: { tokens: { token: req.headers.authorization } }, $set: { online: false } },
				{ new: true }
			);
			// user.online = false;
			// await user.save();
			res.send({ msg: 'User logged out', user });
		} catch (error) {
			console.error(error);
			res.status(500).send({ msg: `User not logged out properly.`, error });
		}
	},
	async getOnline(req, res) {
		try {
			const user = await User.findOne({ _id: req.params._id });
			if (!user.online) {
				user.online = true;
				await user.save();
				return res.send({ msg: `User with Id: ${req.params._id} ist online`, user });
			} else {
				return res.send({ msg: `User with Id: ${req.params._id} ist offline`, user });
			}
		} catch (error) {
			console.error(error);
			res.status(500).send({ msg: `User status not changed.`, error });
		}
	},
};

module.exports = UserController;
