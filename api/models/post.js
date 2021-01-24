const postsSchema = {
  tableName: 'posts',
  postId: 'post_id',
  creator: 'creator'
}

const getPostsById = async (id, db) => {
  try {
    return await db(postsSchema.tableName)
      .where(postsSchema.postId, id)
  } catch (err) {
    console.error({ message: '[getPostsBy] Select operation failed', err })
  }
}

const getPostsByCreatorIds = async (fieldName, fieldValues, db) => {
  try {
    return await db(postsSchema.tableName)
      .whereIn(postsSchema.creator, fieldValues)
  } catch (err) {
    console.error({ message: '[getPostsByCreatorIds] Select operation failed', err })
  }
}

const createPost = async (data, db) => {
  try {
    await db(postsSchema.tableName)
      .insert({ ...data })
  } catch (err) {
    console.error({ message: '[createPost] Compare operation failed', err })
  }
}

const deleteById = async (id, db) => {
  try {
    await db(postsSchema.tableName)
      .where(postsSchema.postId, id)
      .del()
  } catch (err) {
    console.error({ message: '[deleteById] Delete operation failed', err })
  }
}

const updateById = async (id, fieldName, newValue, db) => {
  try {
    await db(postsSchema.tableName)
      .where(postsSchema.postId, id)
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
