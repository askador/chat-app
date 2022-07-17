const db = require('../../database/db')
const { logger } = require('../../utils')

const leaveRoom = (socket, id) => {
  logger.info(`user ${socket.id} left room: ${id}`);
  
  const roomIndex = db.rooms.findIndex(room => room.id === id)
  db.rooms[roomIndex].users = db.rooms[roomIndex].users.filter(user => user.id !== socket.id)
  
  logger.info(`Rooms: ${JSON.stringify(db.rooms)}`)
  
  socket.broadcast.emit('updateUsers', db.rooms[roomIndex].users)
  socket.leave(id)

  if (db.rooms[roomIndex].users.length === 0) {
    db.rooms = db.rooms.filter(room => room.id !== id)
    socket.broadcast.emit('updateRooms', db.rooms)
  }
}

module.exports = leaveRoom