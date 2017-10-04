const express = require('express')
const router = express.Router()

//Register a new user
router.post('/register', (req, res, next) => {
    const user = req.body
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
