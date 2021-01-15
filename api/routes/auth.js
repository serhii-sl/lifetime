const express = require('express')
// router
const router = express.Router()
// models
const controller = require('../controllers/auth')

router.post('/login', [controller.signIn])
router.post('/register', [controller.signUp])

module.exports = router
