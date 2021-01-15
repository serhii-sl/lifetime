const express = require('express')
const router = express.Router()
// libs
const jwt = require('jsonwebtoken')
const { comparePass } = require('../utils/auth')
// models
const { getUserByEmail, createUser } = require('../models/user')
// config
const { auth_secret } = require('../config')
// db
const db = require('../db')

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const [user] = await getUserByEmail(email, db)

    if (!user) {
      res.json({ success: false, message: 'User not found' })
    }

    const isMatchPassword = await comparePass(password, user.password)

    if (isMatchPassword) {
      const token = jwt.sign(user, auth_secret, {
        expiresIn: 60 * 60 * 24
      })

      res.json({
        success: true,
        token: 'JWT ' + token,
        user: {
          id: user.user_id,
          fullName: user.full_name,
          email: user.email
        }
      })
    } else {
      res.json({ success: false, message: 'Password not match' })
    }
  } catch (e) {
    res.status(500).json({ success: false, message: 'Server error, try now' })
  }
})

router.post('/register', async (req, res) => {
  const data = req.body
  const userExist = getUserByEmail(data.user_id)

  if (userExist) {
    res.send({ message: 'User with this email already exist' })
  } else {
    await createUser(data, db)
    res.send({ message: 'register' })
  }
})


module.exports = router


