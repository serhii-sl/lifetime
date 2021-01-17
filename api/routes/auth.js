const express = require('express')
// router
const router = express.Router()
// models
const controller = require('../controllers/auth')

router.post('/login', [controller.signIn])
router.post('/register', [controller.signUp])
router.get('/confirm/:id/:token', [controller.confirmationEmail])
router.get('/resend/:id', [controller.resendConfirmationLink])

module.exports = router
