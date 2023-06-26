const { MongoClient } = require('mongodb');
require('dotenv').config();

let dBConnection

let uri = process.env.MONGODB_URL;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
    .then((client) => {
      dBConnection = client.db()
      console.log('Connected to MongoDB Atlas');
      return cb()
    })
    .catch(err => {
      console.log(err)
      return cb(err)
    })
  },
  getDb: () => dBConnection
}

