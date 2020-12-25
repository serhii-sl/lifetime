const express = require('express');
const router = express.Router();

router.get('/profile/:id', async (req, res) => {
    const {id} = req.params;
    res.send({message: 'get', id});
});

router.post('/profile', async (req, res) => {
    res.send({message: 'insert'});
});

router.put('/profile/:id', async (req, res) => {
    const {id} = req.params;
    res.send({message: 'update', id});
});

router.delete('/profile/:id', async (req, res) => {
    const {id} = req.params;
    res.send({message: 'delete', id});
});

module.exports = router;