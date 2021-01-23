// libs
const bcrypt = require('bcrypt')

module.exports.comparePass = async (userPassword, dbPassword) => {
  try {
    const verified = bcrypt.compareSync(userPassword, dbPassword)
    return !!verified
  } catch (e) {
    console.error({ message: '[comparePass] Compare operation failed' })
  }
}
