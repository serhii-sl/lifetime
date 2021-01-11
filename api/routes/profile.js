const express = require('express')
// models
const { updateUserField, getUserById, deleteUser, createUser } = require('../models/user')
// router
const router = express.Router()

const init = (db, isAuthenticate) => {
  router.get('/profile/:id', isAuthenticate, async (req, res) => {
    try {
      const { id } = req.params

      const user = await getUserById(id, db)

      res.json({ items: user })
    } catch (e) {
      console.error(e)
    }
  })

  router.post('/profile', isAuthenticate, async (req, res) => {
    try {
      const data = req.body

      await createUser(data, db)

      res.json({ message: 'Profile was created successfully' })
    } catch (e) {
      console.error(e)
    }
  })

  router.put('/profile/:id', isAuthenticate, async (req, res) => {
    try {
      const { id } = req.params
      const { field, newValue } = req.body

      await updateUserField(id, field, newValue, db)
      res.send({ message: `Field ${field} for user ${id} have been updated` })
    } catch (e) {
      console.error(e)
    }
  })

  router.delete('/profile/:id', isAuthenticate, async (req, res) => {
    try {
      const { id } = req.params

      await deleteUser(id)

      res.send({ message: `User with is ${id} have been deleted` })
    } catch (e) {
      console.error(e)
    }
  })
}

module.exports = () => ({
  init,
  router
})
