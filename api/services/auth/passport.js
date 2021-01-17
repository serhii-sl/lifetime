// models
const { getUserByEmail } = require('../../models/user')
// strategy
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt
// config
const { auth_secret } = require('../../config')

module.exports = (passport, db) => {
  const opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = auth_secret

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    return getUserByEmail(jwt_payload.email, db)
      .then((items) => {
        const [user] = items

        if (user && user.email_verified) {
          return done(null, user)
        }
        return done(null, false)
      })
      .catch(err => done(err, false))
  }))
}



