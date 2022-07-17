const db = require('../database/db')
const ApiError = require('../errors/ApiError');


class UsersController {

  async getAll(req, res, next) {
    const roomId = req.query?.roomId
    if (roomId !== undefined) {
      const room = db.rooms.find(room => room.id === roomId)
      return res.json(room.users)
    }

    return res.json(db.users)
  }

}

module.exports = new UsersController()