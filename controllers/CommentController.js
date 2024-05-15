const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

const CommentController ={
    async create(req,res) {
        try{
            const comment = await Comment.create(req.body)
            await Post.findByIdAndUpdate(req.post._id, { $push: {CommentIds: comment._id}})
            await User.findByIdAndUpdate(req.User._id, { $push: {CommentIds: comment._id}})
            res.status(201).send(comment)
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: "There was a problem creating the comment" })
        }
    },
    async update(req,res) {
        try{
            const comment = await Comment.findByIdAndUpdate(req.params._id, req.body,
        { new: true })
            res.send({ msg: "Comment succesfully updated", Comment });
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: "There was a problem updating the comment" })
        }
    },
    async delete(req,res) {
        try {
            const comment = await Comment.findByIdAndDelete(req.params._id)
            await Post.findByIdAndDelete(req.post._id, { $pull: {CommentIds: comment._id}})
            await User.findByIdAndDelete(req.User._id, { $pull: {CommentIds: comment._id}})
            res.status(201).send(comment)
            res.send({ msg: "Comment delete ", comment })
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: "There was a problem trying to remove the comment"})
        }
    },
    async getAll(req,res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const comments = await Comment.find()
                .populate("likes.userId")
                .limit(limit)
                .skip((page - 1) * limit);
            res.send(comments)
        } catch (error) {
            console.error(error);
        }
    },    
}

module.exports = CommentController;