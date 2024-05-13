const mongoose = require('mongoose');

const { MONGO_URI, MONGO_URI_TEST } = require('./keys.js');

const dbConnection = async () => {
	try {
		if (process.env.NODE_ENV === 'test') {
			console.log('DATABASE for tests conected');
			return await mongoose.connect(MONGO_URI_TEST);
		} else {
			console.log('DATABASE conected');
			return await mongoose.connect(MONGO_URI);
		}
	} catch (error) {
		console.error(error);
		throw new Error('DATABASE connection was wrong');
	}
};

module.exports = {
	dbConnection,
};
