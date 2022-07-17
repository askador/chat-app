const {rooms, users} = require('./models')

// const db = new Map()
// db.set('rooms', rooms)
// db.set('users', users)
const db = {
  rooms: rooms,
  users: users
}

module.exports = db