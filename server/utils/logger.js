const { transports, format, addColors, createLogger } = require('winston')
const { colorize, combine, timestamp, printf, prettyPrint, splat, errors } = format

function syntaxHighlight(json, colors) {
	if (!colors)
		colors = {
			key: '\x1b[34m', //'\x1b[1m',
			boolean: '\x1b[31m',
			string: '\x1b[32m',
			number: '\x1b[33m',
			null: '\x1b[36m',
			undefined: '\x1b[35m',
		}

	let jsonStr = JSON.stringify(
		json,
		function (k, v) {
			return v === undefined ? '9bFf2G6n' : v
		},
		2
	)

	jsonStr = jsonStr
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
	//
	return jsonStr
		.replace(
			/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null|undefined)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
			function (match) {
				var cls = 'number'
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						cls = 'key'
						match = match.replace(/"/g, '')
					} else {
						if (match == '"9bFf2G6n"') {
							cls = 'undefined'
							match = 'undefined'
						} else cls = 'string'
					}
				} else if (/true|false/.test(match)) {
					cls = 'boolean'
				} else if (/null/.test(match)) {
					cls = 'null'
				} else if (/undefined/.test(match)) {
					cls = 'null'
				}
				return `${colors[cls]}` + (match ? match : 'nulll') + '\x1b[0m'
			}
		)
		.replace(/,/g, '\x1b[8m' + ',' + '\x1b[0m')
}
const myFormats = {
	consoleFormat: combine(
		errors({ stack: true }),
		colorize(),
		prettyPrint(),
		splat(),
		timestamp({ format: 'MM/DD HH:mm:ss.ms' }),
		printf(({ message, level, timestamp }) => {
			if (message && message.constructor === Object) {
				message = syntaxHighlight(message)
			}
			let newLine = ' '
			if (!!message) newLine = message.indexOf('\n') !== -1 ? '\n' : ' '
			return `${timestamp} | ${level}:${newLine}${message}`
		})
	)
}
addColors({
	debug: 'blue',
	info: 'green',
	warn: 'yellow',
	error: 'red',
	crit: 'redBG white',
})


const logger = createLogger({
	level: process.env.LOGGING_LEVEL,
	transports: [
		new transports.Console({
			format: myFormats.consoleFormat,
		})
	],
	exitOnError: false,
})

module.exports = logger