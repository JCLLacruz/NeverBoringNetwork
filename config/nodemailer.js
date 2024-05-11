const nodemailer = require('nodemailer');
const {nodemailerAuth} = require('./keys.js');
const {user, pass} = nodemailerAuth;

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user,
        pass
    }
});

module.exports = transporter;