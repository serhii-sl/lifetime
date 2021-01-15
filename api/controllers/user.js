// libs
const bcrypt = require('bcrypt')
// models
const { getUserById, saveUser, deleteUser, updateUserField } = require('../models/user')
// db
const db = require('../db')

const getProfile = async (req, res) => {
  try {
    const { id } = req.params

    const post = await getUserById(id, db)

    res.json({ items: post })
  } catch (e) {
    console.error(e)
  }
}

const createProfile = async (req, res) => {
  try {
    const data = req.body
    const { password } = data

    const hashedPassword = bcrypt.hashSync(password, 10)

    await saveUser(data, hashedPassword, db)

    res.json({ message: 'Profile was created successfully' })
  } catch (e) {
    console.error(e)
  }
}

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params

    await deleteUser(id, db)

    res.send({ message: `Profile with id ${id} have been deleted` })
  } catch (e) {
    console.error(e)
  }
}

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params
    const { field, newValue } = req.body

    await updateUserField(id, field, newValue, db)

    res.send({ message: `Field ${field} for profile ${id} have been updated` })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile
}
