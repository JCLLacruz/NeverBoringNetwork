const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    image_path: String,
    UserId: [{
        type: ObjectId,
        ref: "User"
    }],
    //HobbyId: ObjectId,
    status: String,
    LikeIds: Array,
    CommentsIds: Array

}, { timestamps: true });

PostSchema.index({
    title: "text",
})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
