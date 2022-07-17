import io from 'socket.io-client'
import config from './config'

const socket = io(`${config.protocol}://${config.host}:${config.port}`) 

export default socket