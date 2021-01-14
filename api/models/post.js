const getPostsById = async (id, db) => {
  try {
    return await db('posts').where('post_id', id)
  } catch (err) {
    console.error({ message: '[getPostsBy] Select operation failed', err })
  }
}

const getPostsByArrayValues = async (fieldName, fieldValues, db) => {
  try {
    return await db('posts').whereIn(fieldName, fieldValues)
  } catch (err) {
    console.error({ message: '[getPostsByArrayValues] Select operation failed', err })
  }
}

const createPost = async (data, db) => {
  try {
    await db('posts').insert({ ...data })
  } catch (e) {
    console.error({ message: '[createPost] Compare operation failed' })
  }
}

const deleteById = async (id, db) => {
  try {
    await db('posts').where('post_id', id).del()
  } catch (e) {
    console.error({ message: '[deleteById] Delete operation failed' })
  }
}

const updateById = async (id, fieldName, newValue, db) => {
  try {
    await db('posts')
      .where('post_id', id)
      .update({ [fieldName]: newValue })
  } catch (e) {
    console.error({ message: '[updateById] Update operation failed' })
  }
}

module.exports = {
  getPostsById,
  getPostsByArrayValues,
  createPost,
  deleteById,
  updateById
}
