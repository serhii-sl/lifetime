// libs
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// models
const { getUserById, getUserByEmail, saveUser, updateUserField } = require('../models/user')
// config
const { auth_secret } = require('../config')
// db
const db = require('../services/db')
// services
const { sendEmailVerification, generateVerificationLink } = require('../services/auth/email')
// utils
const { comparePass } = require('../utils/auth')

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const [user] = await getUserByEmail(email, db)

    if (!user) {
      return res.json({ status: 'error', message: 'User not found' })
    }

    if (!user.email_confirmed) {
      return res.send({ status: 'error', message: 'Please verify your email' })
    }

    const isMatchPassword = await comparePass(password, user.password)

    if (isMatchPassword) {
      const token = jwt.sign(user, auth_secret, {
        expiresIn: 60 * 60 * 24
      })

      return res.json({
        success: true,
        token: 'JWT ' + token,
        user: {
          id: user.user_id,
          fullName: user.full_name,
          email: user.email
        }
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

    const url = req.protocol + '://' + req.get('host') + '/auth'

    const confirmationLink = generateVerificationLink(createdUser.user_id, auth_secret, url)

    try {
      await sendEmailVerification(createdUser.email, confirmationLink)

      res.send({ status: 'success', message: 'Email confirmation code have been send' })
    } catch (err) {
      res.status(500).send({ status: 'error', message: 'Can\'t send email verification', error: err })
    }
  }
}

const confirmationEmail = async (req, res) => {
  const { id, token } = req.params

  jwt.verify(token, auth_secret, async (err, decoded) => {
    try {
      if (decoded.userId === id) {
        await updateUserField(id, 'email_confirmed', true, db)
      }
      res.send({ status: 'success', userId: id })
    } catch (err) {
      res.status(500).send({ status: 'error', error: err })
    }
  })
}

const resendConfirmationLink = async (req, res) => {
  const { id } = req.params

  const url = req.protocol + '://' + req.get('host') + '/auth'

  const confirmationLink = generateVerificationLink(id, auth_secret, url)

  const [user] = await getUserById(id, db)
  try {
    await sendEmailVerification(user.email, confirmationLink)

    res.send({ status: 'success', message: 'Email confirmation code have been resend' })
  } catch (err) {
    res.status(500).send({ status: 'error', message: 'Can\'t send email verification', error: err })
  }
}


module.exports = {
  signIn,
  signUp,
  confirmationEmail,
  resendConfirmationLink
}

