const express = require('express');
const router = express.Router();

router.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    res.send({message: 'get', id});
});

router.post('/post', async (req, res) => {
    res.send({message: 'insert'});
});

router.put('/post/:id', async (req, res) => {
    const {id} = req.params;
    res.send({message: 'update', id});
});

router.delete('/post/:id', async (req, res) => {
    const {id} = req.params;
    res.send({message: 'delete', id});
});

module.exports = router;
