const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    birthday: {type: Date, required: true},
    role: String,
    name: {first: {type: String, required: true},last: {type: String, required: true}},
    location: String,
    online: Boolean,
    HobbyIds: Array,
    PostIds: Array,
    FollowersIds: Array,
    FollowsIds: Array,
    CommentIds: Array,
    tokens: [{token: String, device: String}],
},{timestamps: true});

const User = mongoose.model('User',UserSchema);

module.exports = User;