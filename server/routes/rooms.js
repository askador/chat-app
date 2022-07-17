const Router = require('express')
const router = new Router()
const roomsController = require('../controllers/rooms')

router.get('/', roomsController.getAll)

module.exports = router