const moment = require('moment')

const logger = (req, res, next) => {
  console.log('What it do baby')
  next()
}

module.exports = logger
