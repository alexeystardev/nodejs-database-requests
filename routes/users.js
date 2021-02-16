const express = require('express');
const router = express.Router();
const {  User,validate } = require('../models/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const auth = require('./../middleware/auth');
 
router.get('/dashboard', auth, async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	if (user.role == 'admin' || user.role == 'user' || user.role == 'moderator') {
		res.send('Welcome back to Dashboard: \n' + 'Role: ' + user.role + '\n Name: ' + user.name + '\n Email: ' + user.email);
	} else {
		res.send('Access denied!')
	}
});

router.get('/admin', auth, async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	if (user.role == 'admin') {
		res.send('Welcome back to Admin Panel : \n' + 'Role: ' + user.role + '\n Name: ' + user.name + '\n Email: ' + user.email);
	} else {
		res.send('Access denied!')
	}
});

 router.post('/registration', async (req, res) => {
    const {error}=await validate(req.body)
   
    if (error) {
            return res.status(400).send(error.details[0].message);}
        
    let user = await User.findOne({ email: req.body.email});
   // console.log(user)
    if (user)
             return res.status(400).send('User already registered.');
    
        const userToSave=new User(req.body)
        const hashedPassword = await bcrypt.hash(userToSave.password, 10)
        userToSave.password=hashedPassword

        userToSave.save().then(()=>{
        return  res.status(200).send(
            _.pick(userToSave,['_id','role','name','email']))
        }).catch((err)=>{
        return res.status(400).send(err)
        })

});

 
module.exports = router;


