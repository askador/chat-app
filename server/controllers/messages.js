const ApiError = require('../errors/ApiError');

const db = require('../database/db')

class MessagesController {

  async getAll(req, res, next) {
    const roomId = req.query?.roomId
    if (roomId !== undefined) {
      const room = db.rooms.find(room => room.id === roomId)
      return res.json(room.messages)
    }

    return res.json({})
  }
}

module.exports = new MessagesController()