const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./config/database')
const app = express()
const users = require('./routes/users')

mongoose.connect(config.database)
mongoose.connection.on('connected', () => {
    console.log("Connected to database" + config.database)
})
mongoose.connection.on('error', (err) => {
    console.log("DATABASE ERROR: " + err)
})
//port number
const port = process.env.PORT || 8080
//Cors Middleware
app.use(cors())
//set static folder
app.use(express.static(path.join(__dirname, 'public')))
//Body Parser Middleware
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Passport middleware
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)

app.use('/users', users)
//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint')
})
app.get('*', (req, res) => {
    res.redirect('/')
})
//Start server 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
