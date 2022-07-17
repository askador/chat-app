import config from './config'

const api = require('axios').create({
  baseURL: `${config.protocol}://${config.host}:${config.port}/api`
})    

export default api