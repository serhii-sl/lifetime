require('dotenv').config();

module.exports = {
  endpoint: process.env.API_URL || process.env.DEFAULT_API_URL,
  port: process.env.PORT || process.env.DEFAULT_PORT
};
