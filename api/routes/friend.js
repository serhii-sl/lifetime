const express = require('express')
// router
const router = express.Router()
// models
const {
  getFriendIdsForUser,
  getPendingFriendshipIdsRequests,
  changeFriendshipStatus
} = require('../models/friend')
const { getUserById } = require('../models/user')

const init = (db, isAuthenticate) => {
  router.post('/friends', isAuthenticate, async (req, res) => {
    try {
      const { userId } = req.body

      const friendIds = await getFriendIdsForUser(userId, db)
      const friends = friendIds.map(async friendId => await getUserById(friendId, db))

      res.json({ items: friends })
    } catch (e) {
      console.error(e)
    }
  })

  router.post('/friends/invites', isAuthenticate, async (req, res) => {
    try {
      const { userId } = req.body

      const friendIds = await getPendingFriendshipIdsRequests(userId, db)
      const friends = friendIds.map(async friendId => await getUserById(friendId, db))

      res.json({ items: friends })
    } catch (e) {
      console.error(e)
    }
  })

  router.put('/friends/invites', isAuthenticate, async (req, res) => {
    try {
      const { userId, sender, status } = req.body

      await changeFriendshipStatus(userId, sender, status, db)

      res.send({ message: `Invite status for user ${sender} have been change` })
    } catch (e) {
      console.error(e)
    }
  })

}

module.exports = () => ({
  init,
  router
})
