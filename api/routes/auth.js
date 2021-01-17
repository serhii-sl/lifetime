const express = require('express')
// router
const router = express.Router()
// models
const controller = require('../controllers/auth')

router.post('/login', controller.signIn)
router.post('/register', controller.signUp)
router.get('/confirm/:id/:token', controller.verificationEmail)
router.get('/resend/:id', controller.resendVerificationLink)

module.exports = router
