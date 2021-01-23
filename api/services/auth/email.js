// libs
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
// config
const { smtp_user, smtp_password } = require('../../config')

const sendEmailVerification = async (email, confirmationLink) => {
  const mailData = {
    from: smtp_user,
    to: email,
    subject: 'LifeTime verification email',
    html: `<b>Hey! Please follow the link to confirm your email: </b> <br><br> ${confirmationLink}<br/>`
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: smtp_user,
      pass: smtp_password
    }
  })

  await transporter.sendMail(mailData, (err, info) => {
    if (err)
      console.error(err)
    else
      console.error(info)
  })
}

const generateVerificationLink = (userId, authSecret, url) => {
  const confirmationToken = jwt.sign({ userId }, authSecret, {
    expiresIn: 60 * 60
  })

  return url + `/confirm/${userId}/${confirmationToken}`
}


module.exports = {
  sendEmailVerification,
  generateVerificationLink
}
