const cron = require('node-cron');
const mongoose = require('mongoose');
const User = require('../models/User');

// Task executed every Monday at 8 AM
cron.schedule('0 8 * * 1', async () => {
  try {
    await User.deleteMany({ emailConfirmed: false });
    logger.info('All users with email not confirmed deleted');
  } catch (error) {
    logger.error('Error deleting unconfirmed users:', error);
  }
});