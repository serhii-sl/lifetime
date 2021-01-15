// models
const { getFriendIds } = require('../models/friend')
const { getPostsById, getPostsByCreatorIds, createPost, updateById, deleteById } = require('../models/post')
// db
const db = require('../db')

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params

    const post = await getPostsById(id, db)

    res.json({ items: post })
  } catch (e) {
    console.error(e)
  }
}

const getAllPosts = async (req, res) => {
  try {
    const { userId } = req.body

    const ids = await getFriendIds(userId, db)
    const posts = await getPostsByCreatorIds(ids, db)

    res.json({ items: posts })
  } catch (e) {
    console.error(e)
  }
}

const addPost = async (req, res) => {
  try {
    const data = req.body

    await createPost(data, db)

    res.json({ message: 'Post was created successfully' })
  } catch (e) {
    console.error(e)
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params

    await deleteById(id, db)

    res.send({ message: `Post with id ${id} have been deleted` })
  } catch (e) {
    console.error(e)
  }
}

const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { field, newValue } = req.body

    await updateById(id, newValue, db)

    res.send({ message: `Field ${field} for post ${id} have been updated` })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getOnePost,
  getAllPosts,
  addPost,
  deletePost,
  updatePost
}
