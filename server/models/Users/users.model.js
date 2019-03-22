const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
})

const UserModel = module.exports = mongoose.model('user', userSchema)

module.exports.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      console.log('err')
    }
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        console.log('errors')
      }
      newUser.password = hash
      newUser.save(callback)
    })
  })
}
