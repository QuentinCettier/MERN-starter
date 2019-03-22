const mongoose = require('mongoose')

/*
 MongoDB Config
*/
const dbConnect = () => {
  return new Promise((resolve, reject) => {
    // Connect Database
    mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true }
    )
      .then(db => resolve(process.env.MONGO_URL))
      .catch(error => reject(error))
  })
}

module.exports = dbConnect
