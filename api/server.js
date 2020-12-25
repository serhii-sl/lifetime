const express = require('express')
const { port, endpoint } = require('./config')
const app = express()

app.get('/', (req, res) => {
    res.send('Life Time')
})

app.listen(port, () => {
    console.log(`App listening at ${endpoint}:${port}`)
})

app.get('*', function (req, res, next) {
    const error = new Error(
      `${req.ip} tried to access ${req.originalUrl}`,
    );
    error.statusCode = 301;
    next(error);
});

app.use((error, req, res, next) => {
    if (!error.statusCode) error.statusCode = 500;

    return res
      .status(error.statusCode)
      .json({error: error.toString()});
});
