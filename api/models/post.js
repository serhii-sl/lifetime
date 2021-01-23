const getPostsById = async (id, db) => {
  try {
    return await db('posts').where('post_id', id)
  } catch (err) {
    console.error({ message: '[getPostsBy] Select operation failed', err })
  }
}

const getPostsByCreatorIds = async (fieldName, fieldValues, db) => {
  try {
    return await db('posts').whereIn('creator', fieldValues)
  } catch (err) {
    console.error({ message: '[getPostsByCreatorIds] Select operation failed', err })
  }
}

const createPost = async (data, db) => {
  try {
    await db('posts').insert({ ...data })
  } catch (err) {
    console.error({ message: '[createPost] Compare operation failed', err })
  }
}

const deleteById = async (id, db) => {
  try {
    await db('posts').where('post_id', id).del()
  } catch (err) {
    console.error({ message: '[deleteById] Delete operation failed', err })
  }
}

const updateById = async (id, fieldName, newValue, db) => {
  try {
    await db('posts')
      .where('post_id', id)
      .update({ [fieldName]: newValue })
  } catch (err) {
    console.error({ message: '[updateById] Update operation failed', err })
  }
}

module.exports = {
  getPostsById,
  getPostsByCreatorIds,
  createPost,
  deleteById,
  updateById
}
