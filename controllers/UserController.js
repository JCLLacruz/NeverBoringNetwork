const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const {jwt_secret} = require('../config/keys.js');

const UserController = {
    async register(req,res) {
        try {
            const user = await User.create(req.body)
            res.status(201).send({msg:'User created', user});
        } catch (error) {
            
        }
    }
};

module.exports = UserController;