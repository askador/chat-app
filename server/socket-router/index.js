const db = require("../database/db")
const {
  createRoom,
  disconnect,
  setUserName,
  joinRoom,
  leaveRoom,
  message,
  roomClick,
} = require("./on")
const { logger } = require("../utils")

const onSocketConnection = (socket) => {
  socket.emit("me", socket.id)

  db.users.push({ id: socket.id })
  logger.info(`Users: ${JSON.stringify(db.users)}`)

  socket.on("createRoom", (title) => createRoom(socket, title))
  socket.on("setUserName", (name) => setUserName(socket, name))
  socket.on("joinRoom", (id) => joinRoom(socket, id))
  socket.on("leaveRoom", (id) => leaveRoom(socket, id))
  socket.on("message", (payload) => message(socket, payload))
  socket.on('roomClick', (roomId) => roomClick(socket, roomId))

  socket.on("disconnect", () => disconnect(socket))
}

module.exports = onSocketConnection
