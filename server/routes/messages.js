const Router = require('express')
const router = new Router()
const messagesController = require('../controllers/messages')

router.get('/', messagesController.getAll)

module.exports = router