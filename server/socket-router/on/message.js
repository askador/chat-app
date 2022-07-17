const db = require('../../database/db')

/**
 * 
 * message {
 *  text: string,
 *  from: {
 *    id: uuid
 *    name: string,
 *  }
 * }
 */
const message = (socket, message) => {
  const room = db.rooms.find(room => room.users.find(user => user.id === socket.id))
  const roomIndex = db.rooms.findIndex(r => r.id === room.id)

  db.rooms[roomIndex].messages.push(message)

  socket.to(message.roomId).emit("newMessage", message)
  socket.emit("newMessage", message)
}

module.exports = message