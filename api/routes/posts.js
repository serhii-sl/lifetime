const express = require('express')
// router
const router = express.Router()
const passport = require('passport')
// models
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../models/post')

const init = (db, isAuthenticate) => {
  router.get('/posts', isAuthenticate, async (req, res) => {
    try {
      const { userId } = req.body

      const posts = await getAllPosts(userId, db)

      res.json({ items: posts })
    } catch (e) {
      console.error(e)
    }
  })

  router.get('/post/:id', isAuthenticate, async (req, res) => {
    try {
      const { id } = req.params

      const post = await getPostById(id, db)

      res.json({ items: post })
    } catch (e) {
      console.error(e)
    }
  })

  router.post('/post', isAuthenticate, async (req, res) => {
    try {
      const params = req.body

      await createPost(params, db)

      res.json({ message: 'Post was created successfully' })
    } catch (e) {
      console.error(e)
    }
  })

  router.put('/post/:id', isAuthenticate, async (req, res) => {
    try {
      const { id } = req.params
      const { field, newValue } = req.body

      await updatePost(id, field, newValue, db)

      res.send({ message: `Field ${field} for post ${id} have been updated` })
    } catch (e) {
      console.error(e)
    }
  })

  router.delete('/post/:id', isAuthenticate, async (req, res) => {
    try {
      const { id } = req.params

      await deletePost(id, db)

      res.send({ message: `Post with is ${id} have been deleted` })
    } catch (e) {
      console.error(e)
    }
  })
}

module.exports = () => ({
  init,
  router
})
