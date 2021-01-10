const express = require('express')
// libs
const { v4 } = require('uuid')
// router
const router = express.Router()

module.exports = (db) => {
  router.get('/profile/:id', async (req, res) => {
    try {
      const { id } = req.params

      const user = await db('users').where('user_id', id)

      res.json({ items: user })
    } catch (e) {
      console.error(e)
    }
  })

  router.post('/profile', async (req, res) => {
    try {
      const params = req.body

      await db('users').insert({ user_id: v4(), ...params })

      res.json({ message: 'Profile was created successfully' })
    } catch (e) {
      console.error(e)
    }
  })

  router.put('/profile/:id', async (req, res) => {
    try {
      const { id } = req.params
      const { field, newValue } = req.body

      db('users')
        .where('user_id', id)
        .update({ [field]: newValue })

      res.send({ message: `Field ${field} for user ${id} have been updated` })
    } catch (e) {
      console.error(e)
    }
  })

  router.delete('/profile/:id', async (req, res) => {
    try {
      const { id } = req.params

      db('users').where('user_id', id).del()

      res.send({ message: `User with is ${id} have been deleted` })
    } catch (e) {
      console.error(e)
    }
  })
}
