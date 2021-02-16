const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {
	User
} = require('../models/user');
const auth = require('./../middleware/auth');

router.get("/showUsers", auth, async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	if (user.role == 'admin') {
		const showUsers = await User.find({})
		for (keys in showUsers){
			const userId = showUsers[keys]._id;
			const userName = showUsers[keys].name;
			const userRole = showUsers[keys].role;
			const userEmail = showUsers[keys].email;
			console.log('ID:'+userId, 'Name:'+'( '+userName+' )', 'Role:'+'( '+userRole+' )', 'Email:'+userEmail)
		}
		// console.log(showUsers[1].role)
		res.send(showUsers)
	} else {
		res.send("Access denied!")
	}
})

router.delete("/delete/:_id", auth, async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	if (user.role == 'admin') {
		const userToDelete = await User.findById(req.params._id)
		if (userToDelete !== null) {
			userToDelete.delete()
			res.send('Successfully user deleted!')
		}else {
			res.send('User not found!')
		}
	}else {
		res.send('Access denied!')
	}
});

module.exports = router;