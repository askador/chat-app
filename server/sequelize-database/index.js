const {associate} = require('./models')
const sequelize = require('./connection')
const {logger} = require('../utils')


async function setup() {
	logger.info('Establishing database connection...')
	try {
		await sequelize.authenticate()
	} catch (err) {
		logger.error('Unable to connect to the database')
		logger.error(err.message)
		process.exit(1)
	}
	await associate()
	await sequelize.sync({ alter: true })
}


module.exports = {
    sequelize,
    setup
}