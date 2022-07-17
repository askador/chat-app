const ApiError = require('../errors/ApiError');

const db = require('../database/db')

class RoomsController {

  async getAll(req, res, next) {
    return res.json(db.rooms)
  }

}

module.exports = new RoomsController()