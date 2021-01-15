// models
const { getUsersByIds } = require('../models/user')
const { getFriendIds, getPendingFriendshipIdsRequests } = require('../models/friend')
// db
const db = require('../services/db')

const getFriends = async (req, res) => {
  try {
    const { id } = req.body

    const friendsIds = await getFriendIds(id, db)
    const friends = await getUsersByIds(friendsIds, db)

    res.json({ items: friends })
  } catch (e) {
    console.error(e)
  }
}

const getFriendRequests = async (req, res) => {
  try {
    const { id } = req.body

    const friendshipIdsRequests =  await getPendingFriendshipIdsRequests(id, db)
    const friendRequestsProfiles = await getUsersByIds(friendshipIdsRequests, db)

    res.json({ items: friendRequestsProfiles })
  } catch (e) {
    console.error(e)
  }
}

const updateFriendshipStatus = async (req, res) => {
  try {
    const { userId, sender, status } = req.body

    await updateFriendshipStatus(userId, sender, status, db)

    res.send({ message: `Invite status for user ${sender} have been change` })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getFriends,
  getFriendRequests,
  updateFriendshipStatus
}
