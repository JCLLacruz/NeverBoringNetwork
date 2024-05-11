const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    emailConfirmed: Boolean,
    password: {type: String, required: true},
    birthday: {type: Date, required: true},
    role: String,
    name: {first: {type: String},last: {type: String}},
    location: String,
    online: Boolean,
    HobbyIds: Array,
    PostIds: Array,
    FollowersIds: Array,
    FollowsIds: Array,
    CommentIds: Array,
    tokens: [{token: String, userAgent: String}],
},{timestamps: true});

const User = mongoose.model('User',UserSchema);

module.exports = User;