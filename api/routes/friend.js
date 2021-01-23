const express = require('express')
// router
const router = express.Router()
// models
const controller = require('../controllers/friend')
// middleware
const checkAuth = require('../middleware/checkAuth')

router.post('/', checkAuth, controller.getFriends)
router.post('/invites', checkAuth, controller.getFriendRequests)
router.put('/invites', checkAuth, controller.updateFriendshipStatus)

module.exports = router
