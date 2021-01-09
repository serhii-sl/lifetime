const express = require('express')
const { port, endpoint } = require('./config')
const app = express()
// routes
const postsRouter = require('./routes/posts')
const profileRouter = require('./routes/profile')
const authRouter = require('./routes/auth')
const errorRouter = require('./routes/error')

app.get('/', (req, res) => {
  res.send('Life Time')
})

app.use(authRouter)
app.use(postsRouter)
app.use(profileRouter)
app.use(errorRouter)

app.listen(port, () => {
  console.log(`App listening at ${endpoint}:${port}`)
})
