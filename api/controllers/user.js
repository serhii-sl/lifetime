// models
const { usersSchema, getUserById, deleteUser, updateUserField } = require('../models/user')
// db
const db = require('../services/db')

const getProfile = async (req, res) => {
  try {
    const { id } = req.params

    const dbUser = await getUserById(id, db)

    res.json({
      userId: dbUser[usersSchema.userId],
      fullName: dbUser[usersSchema.fullName],
      phone: dbUser[usersSchema.phone],
      email: dbUser[usersSchema.email],
      status: dbUser[usersSchema.status],
      birthday: dbUser[usersSchema.birthday],
      work: dbUser[usersSchema.work],
      university: dbUser[usersSchema.university],
      educationStatus: dbUser[usersSchema.educationStatus]
    })
  } catch (e) {
    res.send({ status: 'error', error: e })
    console.error(e)
  }
}

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params

    await deleteUser(id, db)

    res.send({ status: 'success', message: `Profile with id ${id} have been deleted` })
  } catch (e) {
    res.send({ status: 'error', error: e })
    console.error(e)
  }
}

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params
    const { field, newValue } = req.body

    await updateUserField(id, field, newValue, db)

    res.send({ status: 'success', message: `Field ${field} for profile ${id} have been updated` })
  } catch (e) {
    res.send({ status: 'error', error: e })
    console.error(e)
  }
}

module.exports = {
  getProfile,
  deleteProfile,
  updateProfile
}
