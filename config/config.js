const mongoose = require('mongoose');

const { MONGO_URI } = require('./keys.js');

const dbConnection = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log('DATABASE conected');
	} catch (error) {
		console.error(error);
		throw new Error('DATABASE connection was wrong');
	}
};

module.exports = {
	dbConnection,
};