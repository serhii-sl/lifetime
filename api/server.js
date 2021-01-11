const express = require('express')
// libs
const app = express()
const bodyParser = require('body-parser')
// di
const DiContainer = require('./DiContainer')
// auth
const passport = require('passport')
// config
const { port, endpoint } = require('./config')

// create DI Container
const diContainer = new DiContainer()

// register dependencies
diContainer.register('db', require('./db'))
// register dependency factories
diContainer.factory('posts', require('./routes/posts'))
diContainer.factory('profile', require('./routes/profile'))
diContainer.factory('auth', require('./routes/auth'))
diContainer.factory('db', require('./db'))
// get registered dependency
const db = diContainer.get('db')
const profile = diContainer.get('profile')
const auth = diContainer.get('auth')
const posts = diContainer.get('posts')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize({}))
app.use(passport.session({}))
require('./passport')(passport, db)

const isAuthenticate = passport.authenticate('jwt', {
  session: false,
  successRedirect: '/posts',
  failureRedirect: '/login'
}, null)

auth.init(db, isAuthenticate)
posts.init(db, isAuthenticate)
profile.init(db, isAuthenticate)
app.use(auth.router)
app.use(posts.router)
app.use(profile.router)

app.get('*', (req, res, next) => {
  if (!req.isAuthenticated() && req.url !== '/login') {
    res.redirect('/login')
  }
  next()
})

app.listen(port, () => {
  console.log(`App listening at ${endpoint}:${port}`)
})
