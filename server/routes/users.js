const Router = require('express')
const router = new Router()
const usersController = require('../controllers/users')

router.get('/', usersController.getAll)

module.exports = router