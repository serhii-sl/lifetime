// libs
const { v4 } = require('uuid')
const bcrypt = require('bcrypt')

const getUserById = async (userId, db) => {
  try {
    return await db('users').where('user_id', userId)
  } catch (err) {
    console.error({ message: '[getUserById] Select operation failed', err })
  }
}

const getUserByEmail = async (email, db) => {
  try {
    return await db('users').where('email', email)
  } catch (err) {
    console.error({ message: '[getUserByEmail] Select operation failed', err })
  }
}

const comparePass = async (userPassword, dbPassword) => {
  try {
    const verified = bcrypt.compareSync(userPassword, dbPassword)
    return !!verified
  } catch (e) {
    console.error({ message: '[comparePass] Compare operation failed' })
  }
}

const createUser = async (data, db) => {
  try {
    const {password} = data
    const passwordHash = bcrypt.hashSync(password, 10)

    await db('users').insert({ user_id: v4(), password: passwordHash, ...data })
  } catch (e) {
    console.error({ message: '[addUser] Compare operation failed' })
  }
}

const deleteUser = async (userId, db) => {
  try {
    await db('users').where('user_id', userId).del()
  } catch (e) {
    console.error({ message: '[deleteUser] Delete operation failed' })
  }
}

const updateUserField = async (userId, fieldName, newValue, db) => {
  try {
    if(fieldName === 'password')
      return

    await db('users')
      .where('user_id', userId)
      .update({ [fieldName]: newValue })

  } catch (e) {
    console.error({ message: '[updateUserField] Update operation failed' })
  }
}

module.exports = {
  getUserById,
  getUserByEmail,
  comparePass,
  createUser,
  deleteUser,
  updateUserField
}
