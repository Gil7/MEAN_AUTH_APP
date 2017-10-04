const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

//Register a new user
router.post('/register', (req, res, next) => {
    console.log(req.params.name)
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success:false,message:'Failed to register user'})
        }else{
            res.json({success: true, message: 'User registered'})
        }
        
    })
})
//Authenticate a user
router.get('/authenticate', (req, res, next) => {
    res.send('authenticate')
})
//Profile
router.get('/authenticate', (req, res, next) => {
    res.send('profile')
})

module.exports = router
