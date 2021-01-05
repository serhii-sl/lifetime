const express = require('express');
const router = express.Router();

router.post('/auth/login', async (req, res) => {
    res.send({message: 'login'});
});

router.post('/auth/register', async (req, res) => {
    res.send({message: 'register'});
});

module.exports = router;
