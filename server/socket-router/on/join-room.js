const uuid = require('uuid')
const db = require('../../database/db')
const { logger } = require('../../utils')

const joinRoom = (socket, id) => {
  socket.join(id)
  logger.info(`user ${socket.id} joined room: ${id}`);

  const roomIndex = db.rooms.findIndex(room => room.id === id)
  const user = db.users.find(user => user.id === socket.id)
  db.rooms[roomIndex].users.push(user)

  logger.info(`Rooms: ${JSON.stringify(db.rooms)}`)

  const users = db.rooms[roomIndex].users

  socket.to(id).emit('updateUsers', users)
  // socket.to(id).broadcast.emit('updateUsers', users)
}

module.exports = joinRoom