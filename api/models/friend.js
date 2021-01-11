const getFriendIdsForUser = async (userId, db) => {
  try {
    const friendships = await db('friendship').where('status', 2).andWhere('sender', userId).orWhere('receiver', userId) || []

    return friendships.map(item => item.sender !== userId ? item.sender : item. receiver)
  } catch (err) {
    console.error({ message: '[getFriendsForUser] Select operation failed', err })
  }
}

const getPendingFriendshipIdsRequests = async (userId, db) => {
  try {
    const friendshipsPending = await db('friendship').where('status', 1).andWhere('receiver', userId) || []
    return friendshipsPending.map(item => item.sender)
  } catch (err) {
    console.error({ message: '[getPendingFriendshipIdsRequests] Select operation failed', err })
  }
}

const changeFriendshipStatus = async (userId, senderId, status, db) => {
  try {
    await db('friendship').where('sender', senderId).orWhere('receiver', userId).update({ 'status': status })

  } catch (err) {
    console.error({ message: '[acceptFriendRequest] Update operation failed', err })
  }
}

module.exports = {
  getFriendIdsForUser,
  getPendingFriendshipIdsRequests,
  changeFriendshipStatus
}
