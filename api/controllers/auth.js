// libs
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// models
const { usersSchema, getUserByEmail, saveUser, updateUserField } = require('../models/user')
// config
const { auth_secret } = require('../config')
// db
const db = require('../services/db')
// services
const { sendEmailVerification, generateVerificationLink } = require('../services/auth/email')
// utils
const { comparePass } = require('../utils/auth')

const sendVerificationLink = async (req, res, user) => {
  const url = req.protocol + '://' + req.get('host') + '/auth'

  const confirmationLink = generateVerificationLink(user.user_id, auth_secret, url)

  try {
    await sendEmailVerification(user.email, confirmationLink)

    return res.send({ status: 'success', message: 'Email confirmation have been sent' })
  } catch (err) {
    return res.status(500).send({ status: 'error', message: 'Can\'t send confirmation email', error: err })
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const [user] = await getUserByEmail(email, db)

    if (!user) {
      return res.json({ status: 'error', message: 'User not found' })
    }

    if (user && !user[usersSchema.emailVerified]) {
      await sendVerificationLink(req, res, user)
    }

    const isMatchPassword = await comparePass(password, user.password)

    if (isMatchPassword) {
      const token = jwt.sign(user, auth_secret, {
        expiresIn: 60 * 60 * 24
      })

      return res.json({
        status: 'success',
        token: 'JWT ' + token,
        userId: user.user_id
      })
    } else {
      res.json({ status: 'error', message: 'Password not match' })
    }
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Server error, try now', error: err })
  }
}

const signUp = async (req, res) => {
  const data = req.body
  const userExist = await getUserByEmail(data.email, db)

  if (userExist.length) {
    return res.send({ status: 'error', error: 'User with this email already exist' })
  } else {
    const hashedPassword = bcrypt.hashSync(data.password, 10)

    await saveUser(data, hashedPassword, db)

    const [createdUser] = await getUserByEmail(data.email, db)

    await sendVerificationLink(req, res, createdUser)
  }
}

const verificationEmail = async (req, res) => {
  const { id, token } = req.params

  jwt.verify(token, auth_secret, async (err, decoded) => {
    try {
      if (decoded.userId === id) {
        await updateUserField(id, usersSchema.emailVerified, true, db)
      }

      res.send({
        status: 'success',
        message: 'Email confirmation have been resent',
        token: 'JWT ' + token,
        userId: id
      })
    } catch (err) {
      res.status(500).send({ status: 'error', error: err })
    }
  })
}

module.exports = {
  signIn,
  signUp,
  verificationEmail
}


