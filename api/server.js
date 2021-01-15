const express = require('express')
// libs
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
// config
const { port, endpoint } = require('./config')
// routes
const postsRoutes = require('./routes/posts');
const profileRoutes = require('./routes/profile');
const authRoutes = require('./routes/auth');
const friendRoutes = require('./routes/friend');
// db
const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize({}))
app.use(passport.session({}))
require('./passport')(passport, db)

app.use('/post', postsRoutes)
app.use('/profile',  profileRoutes)
app.use('/auth', authRoutes)
app.use('/friends', friendRoutes)

app.listen(port, () => {
  console.log(`App listening at ${endpoint}:${port}`)
})
