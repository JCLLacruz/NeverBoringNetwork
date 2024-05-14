const Post = require('../models/Post.js');
const User = require('../models/User.js');
const Hobby = require('../models/Hobby.js');

const HobbyController = {
	async create(req, res) {
		try {
			const hobby = await Hobby.create(req.body);
			res.status(201).send({msg: 'Hobby was created.', hobby});
		} catch (error) {
			console.error(error);
			res.status(500).send({ msg: 'There was a problem creating the hobby.' });
		}
	},
	async addHobbyToUser(req,res) {
        try {
            const user = await User.findByIdAndUpdate({_id: req.user._id},{$push: {HobbyIds: req.params.hobbyId}},{new: true}).populate('HobbyIds');
            await Hobby.findByIdAndUpdate({_id:req.params.hobbyId},{$push: {UserIds: req.user._id}},{new: true});
            res.send({msg:'Hobby added to user', user});
        } catch (error) {
            console.error(error);
			res.status(500).send({ msg: 'There was a problem add the hobby.' },error);
        }
    }
};

module.exports = HobbyController;
