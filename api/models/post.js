const getPostsByUser = async (userId, db) => {
  try {
    return await db('posts').where('creator', userId)
  } catch (err) {
    console.error({ message: '[getPostsByUser] Select operation failed', err })
  }
}

const getPostById = async (id, db) => {
  try {
    return await db('posts').where('post_id', id)
  } catch (err) {
    console.error({ message: '[getPostById] Select operation failed', err })
  }
}

const getAllPosts = async (email, db) => {
  try {
    return await db('posts').select()
  } catch (err) {
    console.error({ message: '[getAllPosts] Select operation failed', err })
  }
}

const createPost = async (data, db) => {
  try {
    await db('posts').insert({ ...data })
  } catch (e) {
    console.error({ message: '[createPost] Compare operation failed' })
  }
}

const deletePost = async (id, db) => {
  try {
    await db('posts').where('post_id', id).del()
  } catch (e) {
    console.error({ message: '[deletePost] Delete operation failed' })
  }
}

const updatePost = async (id, fieldName, newValue, db) => {
  try {
    await db('posts')
      .where('post_id', id)
      .update({ [fieldName]: newValue })

  } catch (e) {
    console.error({ message: '[updatePost] Update operation failed' })
  }
}

module.exports = {
  getPostsByUser,
  getPostById,
  getAllPosts,
  createPost,
  deletePost,
  updatePost
}
