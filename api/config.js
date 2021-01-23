require('dotenv').config()

module.exports = {
  endpoint: process.env.API_URL || process.env.DEFAULT_API_URL,
  port: process.env.PORT || process.env.DEFAULT_PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_name: process.env.DB_NAME,
  auth_secret: process.env.AUTH_SECRET,
  smtp_user: process.env.SMTP_USER,
  smtp_password: process.env.SMTP_PASSWORD
}
