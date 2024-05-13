const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    tittle: String,
    body: String,
    image_path: String,
    //UserId: ObjectId,
    //HobbyId: ObjectId,
    status: String,
    LikeIds: Array,
    CommentsIds: Array

}, { timestamps: true });

PostSchema.index({
    tittle: "text",
})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
