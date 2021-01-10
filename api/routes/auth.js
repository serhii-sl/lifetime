const express = require('express')
const router = express.Router()

const init = (db) => {
  router.post('/auth/login', async (req, res) => {
    try {
    } catch (e) {
      res.status(500).json({ message: 'Server error, try now' })
    }
  })

  router.post('/auth/register', async (req, res) => {
    res.send({ message: 'register' })
  })
}

module.exports = () => ({
  init,
  router
})

