const db = require('../../database/db')
const { logger } = require('../../utils')

const setUserName = (socket, name) => {
  const userWithSameName = db.users.find(user => user.name === name)
  if (userWithSameName !== undefined) {
    socket.emit('userNameTaken', name)
    return
  } 

  const userIndex = db.users.findIndex(user => user.id === socket.id);
  db.users[userIndex].name = name
  socket.emit('userNameValid', name)

  logger.info(`Users: ${JSON.stringify(db.users)}`)
}


module.exports = setUserName