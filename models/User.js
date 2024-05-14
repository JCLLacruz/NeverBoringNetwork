const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({
    username: {type: String, required: [true, 'Username are required'], unique: true},
    email: {type: String, required: [true, 'Username are required'], unique: true},
    emailConfirmed: Boolean,
    password: {type: String, required: true},
    birthday: {type: Date, required: true},
    role: String,
    firstname: {type: String, required : [true, 'Firstname are required']},
    lastname: {type: String, required : [true, 'Lastname are required']},
    location: String,
    online: Boolean,
    //HobbyIds: [{
       // type: ObjectId,
       // ref: 'Hobby'
    //}],
    PostIds: [{
        type: ObjectId,
        ref: 'Post'
    }],
    FollowerIds: [{type: ObjectId, ref: 'User'}],
    FollowIds: [{type: ObjectId, ref: 'User'}],
    CommentIds: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    tokens: [],
},{timestamps: true});

UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    delete user.__v;
    return user;
}


const User = mongoose.model('User',UserSchema);

module.exports = User;