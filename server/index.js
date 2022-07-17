require('dotenv').config({path: `${__dirname}/.env`})
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const database = require('./database')
const { logger } = require('./utils')
const {errorHandler} = require('./middlewares')
const router = require('./routes')
const socketRouter = require('./socket-router')

const HOST = process.env.HOST //0.0.0.0
const PORT = +process.env.PORT || 8080

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: "*",
  },
})

app.use(cors())
app.use(express.json())
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)
io.on('connection', socketRouter)

const start = async () => {
  await database.setup()
  server.listen(PORT, HOST, () => logger.info(`Server started on port ${PORT}`))
}
  
start()