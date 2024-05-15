const Post = require('../models/Post.js');
const User = require('../models/User.js');
const Tag = require('../models/Tag.js');

const createTag = async (req) => {
	const regExpTag = new RegExp(req.body.tag, i);
	const match = await Tag.findOne({regExpTag});
	if(!match) {
		const tag = await Tag.create(req.body);
		return tag;
	} else {
		const tag = req.body.tag;
		return tag;
	}
};

const TagController = {
	async addTagToUser(req,res) {
        try {
			const tag = createTag(req);
            const user = await User.findByIdAndUpdate({_id: req.user._id},{$push: {TagIds: {TagId: tag._id}}},{new: true}).populate('TagIds');
            await Tag.findByIdAndUpdate({tag: tag._id},{$push: {UserIds: {UserId: user._id}}},{new: true});
            res.send({msg:'Tag added', user, tag});
        } catch (error) {
            console.error(error);
			res.status(500).send({ msg: 'There was a problem add the hobby.' },error);
        }
    },
	async addTagToPost(req,res) {
        try {
			const tag = createTag(req);
            const post = await Post.findByIdAndUpdate({_id: req.post._id},{$push: {TagIds: {TagId: tag._id}}},{new: true}).populate('TagIds');
            await Tag.findByIdAndUpdate({tag: tag._id},{$push: {PostIds: {PostId: post._id}}},{new: true});
            res.send({msg:'Tag added', post, tag});
        } catch (error) {
            console.error(error);
			res.status(500).send({ msg: 'There was a problem add the hobby.' },error);
        }
    }
};

module.exports = TagController;
