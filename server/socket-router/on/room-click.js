const roomClick = (socket, roomId) => {
  socket.join(roomId)
}

module.exports = roomClick