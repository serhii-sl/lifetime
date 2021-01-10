const express = require('express')
const { port, endpoint } = require('./config')
const app = express()
// di
const DiContainer = require('./DiContainer')

// create DI Container
const diContainer = new DiContainer()

// register dependencies
diContainer.register('db', require('./db'))
// register dependency factories
diContainer.factory('posts', require('./routes/posts'))
diContainer.factory('profile', require('./routes/profile'))
diContainer.factory('auth', require('./routes/auth'))
diContainer.factory('error', require('./routes/error'))
diContainer.factory('db', require('./db'))

// get registered dependency
const db = diContainer.get('db')
const profile = diContainer.get('profile')
const auth = diContainer.get('auth')
const posts = diContainer.get('posts')
const error = diContainer.get('error')

auth.init(db)
posts.init(db)
profile.init(db)
app.use(auth.router)
app.use(posts.router)
app.use(profile.router)
app.use(error.router)

app.get('/', (req, res) => {
  res.send('Life Time')
})

app.listen(port, () => {
  console.log(`App listening at ${endpoint}:${port}`)
})
