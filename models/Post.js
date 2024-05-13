const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    body: {
        type: String,
        required: [true, "Please enter a body"],
    },
    image_path: String,
    UserId: {
        type: ObjectId,
        ref: "User"
    },
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
