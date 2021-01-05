const express = require('express');
const {v4} = require('uuid')
const router = express.Router();
const db = require('./db')

router.get('/profile/:id', async (req, res) => {
  try {
    const {id} = req.params
    const {rows} = await db('user').where('user_uuid', id)
    res.json({items: rows})
  } catch (e) {
    console.error(e)
  }
});

router.post('/profile', async (req, res) => {
  const {first_name, last_name, phone, email, university, password, birthday, avatar, status} = req.body
  await db('user').insert(v4(), first_name, last_name, phone, email, university, password, birthday, avatar, status)
  res.json(
    {message: "Profile was created successfully"}
  )
});

router.delete('/profile/:id', async (req, res) => {
  const {id} = req.params;
  db('user')
    .where('user_id', id)
    .del()
  res.send({message: `user with is ${id} have been deleted`});
});

module.exports = router;
