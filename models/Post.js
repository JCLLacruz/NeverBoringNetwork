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
<<<<<<< HEAD
    UserId: ObjectId,
=======
    UserId: {
        type: ObjectId,
        ref: "User"
    },
>>>>>>> 41a050264399cc024f3f8d235e3e3acbc43319ad
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
