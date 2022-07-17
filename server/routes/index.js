const Router = require('express')
const router = new Router()
const pong = require('./ping-pong')
const usersRouter = require('./users')
const roomsRouter = require('./rooms')
const messagesRouter = require('./messages')


router.use('/ping', pong)
router.use('/users', usersRouter)
router.use('/rooms', roomsRouter)
router.use('/messages', messagesRouter)


module.exports = router
