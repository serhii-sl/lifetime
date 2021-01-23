// libs
const { v4 } = require('uuid')

const getUserById = async (userId, db) => {
  try {
    return await db('users').where('user_id', userId)
  } catch (err) {
    console.error({ message: '[getUserById] Select operation failed', err })
  }
}

const getUsersByIds = async (fieldValues, db) => {
  try {
    return await db('users').whereIn('user_id', fieldValues)
  } catch (err) {
    console.error({ message: '[getUsersByIds] Select operation failed', err })
  }
}

const getUserByEmail = async (email, db) => {
  try {
    return await db('users').where('email', email) || []
  } catch (err) {
    console.error({ message: '[getUserByEmail] Select operation failed', err })
  }
}

const saveUser = async (data, hashedPassword, db) => {
  try {
    await db('users').insert({ user_id: v4(), ...data, password: hashedPassword })
  } catch (e) {
    console.error({ message: '[saveUser] Create user operation failed' })
  }
}

const deleteUser = async (userId, db) => {
  try {
    await db('users').where('user_id', userId).del()
  } catch (err) {
    console.error({ message: '[deleteUser] Delete operation failed', err })
  }
}

const updateUserField = async (userId, fieldName, newValue, db) => {
  try {
    await db('users')
      .where('user_id', userId)
      .update({ [fieldName]: newValue })
  } catch (err) {
    console.error({ message: '[updateUserField] Update operation failed', err })
  }
}

module.exports = {
  getUserById,
  getUsersByIds,
  getUserByEmail,
  saveUser,
  deleteUser,
  updateUserField
}
