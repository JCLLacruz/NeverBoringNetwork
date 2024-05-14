const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const HobbySchema = new mongoose.Schema({
    hobby: {type: String, required: [true, 'Name for Hobby is necessary'], unique: [true, 'The hobby already exists']},
    description: {type: String, required: [true, 'Description for Hobby is necessary']},
    UserIds: [{type: ObjectId, ref: 'User'}],
    PostIds: [{type: ObjectId, ref: 'Post'}]
},{timestamps: true});

UserSchema.methods.toJSON = function() {
    const hobby = this._doc;
    delete hobby.__v;
    return hobby;
}


const User = mongoose.model('User',UserSchema);

module.exports = User;