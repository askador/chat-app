const uuid = require('uuid')
const db = require('../../database/db')
const { logger } = require('../../utils')

const createRoom = (socket, title) => {
  const user = db.users.find(user => user.id === socket.id)
  const roomWithSameTitle = db.rooms.find(room => room.title === title)

  if (roomWithSameTitle !== undefined) {
    socket.emit('roomExists', title)
    return 
  }
  socket.emit('canCreateRoom', title)

  const room = {
    id: uuid.v4(),
    title: title,
    users: [],
    messages: []
  }

  db.rooms.push(room)
  socket.emit("updateRooms", db.rooms)
  socket.broadcast.emit("updateRooms", db.rooms)

  // console.log('-------------------------')
  logger.info(`Rooms: ${JSON.stringify(db.rooms)}`)
}

module.exports = createRoom