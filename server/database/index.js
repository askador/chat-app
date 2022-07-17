const db = require('./db')
const {logger} = require('../utils')

async function setup() {
	logger.info('Establishing database connection...')

  // if (!db.has('rooms') || !db.has('users')) {
  //   logger.error('Unable to connect to the database')
	// 	process.exit(1)
  // }
}

module.exports = {setup} 