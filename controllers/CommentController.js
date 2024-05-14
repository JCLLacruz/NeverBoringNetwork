const Comment = require("../models/Comment");

const CommentController ={
    async create(req,res) {
        try{
            const comment = await Comment.create(req.body)
            await Post.findByIdAndUpdate(req.post._id, { $push: {CommentIds: comment._id}})
            await User.findByIdAndUpdate(req.User._id, { $push: {CommentIds: comment._id}})
            res.status(201).send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: "There was a problem creating the comment" })
        }
    },
}

module.exports = CommentController;