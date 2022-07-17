const db = require('../../database/db')
const { logger } = require('../../utils')

const disconnect = (socket) => {
  db.users = db.users.filter((user) => user.id !== socket.id);
  logger.info(`Users: ${JSON.stringify(db.users)}`)
  const room = db.rooms.find(room => room.users.find(user => user.id === socket.id))
  const roomIndex = db.rooms.findIndex(r => r.id === room?.id)

  if (roomIndex !== -1) {
    db.rooms[roomIndex].users = db.rooms[roomIndex].users.filter(user => user.id !== socket.id)

    if (db.rooms[roomIndex].users.length === 0) {
      db.rooms = db.rooms.filter(r => r.id !== room.id)
      socket.broadcast.emit('updateRooms', db.rooms)
    } else {
      socket.broadcast.emit('updateUsers', db.rooms[roomIndex].users)
    }
  }


  socket.disconnect();
}

module.exports = disconnect