const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

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
    HobbyIds: [{
        Type: ObjectId,
        ref: 'Hobby'
    }],
    PostIds: [{
        Type: ObjectId,
        ref: 'Post'
    }],
    FollowerIds: Array,
    FollowIds: Array,
    CommentIds: [{
        Type: ObjectId,
        ref: 'Coment'
    }],
    tokens: [{token: String, userAgent: String}],
},{timestamps: true});

const User = mongoose.model('User',UserSchema);

module.exports = User;