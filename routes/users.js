const express = require('express')
const router = express.Router()

//Register a new user
router.get('/register', (req, res, next) => {
    res.send('register')
})
//Authenticate a user
router.get('/authenticate', (req, res, next) => {
    res.send('authenticate')
})
//Profile
router.get('/authenticate', (req, res, next) => {
    res.send('profile')
})
//validate
router.get('/validate', (req, res, next) => {
    res.send('validate')
})
module.exports = router
