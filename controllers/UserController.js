const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const {jwt_secret} = require('../config/keys.js');

const UserController = {
    async register(req,res) {
        try {
            const user = await User.create(req.body)
            res.status(201).send({msg:'User created', user});
        } catch (error) {
            console.error(error);
        }
    },
    async login(req,res) {
        try {
            const user = await User.findOne({
                email: req.body.email,
            })
            const token = {
                token: jwt.sign({_id: user._id},jwt_secret),
                device
        };
        if(user.tokens.length > 4) user.tokens.shift();
        user.tokens.push(token);
        user.online = true;
        await user.save();
        res.send({msg: `Welcome ${user.name.first}`, user, token});
        } catch (error) {
            console.error(error);
        }
    },
};

module.exports = UserController;