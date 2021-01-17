const express = require('express')
// router
const router = express.Router()
// models
const controller = require('../controllers/user')
// middleware
const checkAuth = require('../middleware/checkAuth')

router.get('/:id', [checkAuth, controller.getProfile])
router.put('/:id', [checkAuth, controller.updateProfile])
router.delete('/:id', [checkAuth, controller.deleteProfile])

module.exports = router
