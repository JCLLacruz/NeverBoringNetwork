const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    image_path: String,
    //UserId: ObjectId,
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
