const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    role: String,
    first_name: String,
    last_name: String,
    location: String,
    online: Boolean,
    HobbyIds: Array,
    PostIds: Array,
    FollowersIds: Array,
    FollowsIds: Array,
    CommentIds: Array,
},{timestamps: true});

const User = mongoose.model('User',UserSchema);

module.exports = User;