const express = require('express')
// router
const router = express.Router()
// db
const db = require('../db')

router.get('/post/:id', async (req, res) => {
  try {
    const { id } = req.params

    const post = await db('posts').where('post_id', id)

    res.json({ items: post })
  } catch (e) {
    console.error(e)
  }
})

router.post('/post', async (req, res) => {
  try {
    const params = req.body

    await db('posts').insert({ ...params })

    res.json(
      { message: 'Post was created successfully' }
    )
  } catch (e) {
    console.error(e)
  }
})

router.put('/post/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { field, newValue } = req.body

    db('users')
      .where('user_id', id)
      .update({ [field]: newValue })

    res.send({ message: `Field ${field} for post ${id} have been updated` })
  } catch (e) {
    console.error(e)
  }
})

router.delete('/post/:id', async (req, res) => {
  try {
    const { id } = req.params

    db('posts')
      .where('post_id', id)
      .del()

    res.send({ message: `Post with is ${id} have been deleted` })
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
