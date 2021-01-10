const express = require('express')
const { port, endpoint } = require('./config')
const app = express()
// db
const db = require('./db')
// routes
const postsRouter = require('./routes/posts')
const profileRouter = require('./routes/profile')
const authRouter = require('./routes/auth')
const errorRouter = require('./routes/error')

app.get('/', (req, res) => {
  res.send('Life Time')
})

app.use(() => authRouter(db))
app.use(() => postsRouter(db))
app.use(() => profileRouter(db))
app.use(errorRouter)

app.listen(port, () => {
  console.log(`App listening at ${endpoint}:${port}`)
})
