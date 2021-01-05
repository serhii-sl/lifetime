const express = require('express')
const { port, endpoint } = require('./config')
const app = express()
// routes
const postsRouter = require('./routes/posts');
const profileRouter = require('./routes/profile');
const authRouter = require('./routes/auth');
const errorRouter = require('./routes/error');



app.get('/', (req, res) => {
    res.send('Life Time')
})

app.use(authRouter);
app.use(postsRouter);
app.use(profileRouter);
app.use(errorRouter);

app.get('/profile/:id', async (req, res) => {
    try {
        const user_id =  req.params.id

        const {rowCount, rows} = await db('user').where( 'user_uuid', user_id)

        res.json({count: rowCount, items: rows})
    } catch (e) {
        console.error(e)
    }
})

app.listen(port, () => {
    console.log(`App listening at ${endpoint}:${port}`)
})

app.use((error, req, res, next) => {
    if (!error.statusCode) error.statusCode = 500;

    return res
      .status(error.statusCode)
      .json({error: error.toString()});
});
