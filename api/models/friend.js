const friendshipSchema = {
  tableName: 'friendship',
  status: 'status',
  sender: 'sender',
  receiver: 'receiver'
}

const getFriendIds = async (userId, db) => {
  try {
    const friendships = await db(friendshipSchema.tableName)
      .where(friendshipSchema.status, 2)
      .andWhere(friendshipSchema.sender, userId)
      .orWhere(friendshipSchema.receiver, userId) || []

    return friendships.map(item => item.sender !== userId ? item.sender : item.receiver)
  } catch (err) {
    console.error({ message: '[getFriendIds] Select operation failed', err })
  }
}

const getPendingFriendshipIdsRequests = async (userId, db) => {
  try {
    const friendshipsPending = await db(friendshipSchema.tableName)
      .where(friendshipSchema.status, 1)
      .andWhere(friendshipSchema.receiver, userId) || []
    return friendshipsPending.map(item => item.sender)
  } catch (err) {
    console.error({ message: '[getPendingFriendshipIdsRequests] Select operation failed', err })
  }
}

const changeFriendshipStatus = async (userId, senderId, status, db) => {
  try {
    await db(friendshipSchema.tableName).where(friendshipSchema.sender, senderId)
      .orWhere(friendshipSchema.receiver, userId)
      .update({ [friendshipSchema.status]: status })
  } catch (err) {
    console.error({ message: '[acceptFriendRequest] Update operation failed', err })
  }
}

module.exports = {
  getFriendIds,
  getPendingFriendshipIdsRequests,
  changeFriendshipStatus
}
