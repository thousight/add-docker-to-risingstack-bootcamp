'use strict'

const Koa = require('koa')
const logger = require('winston')
const router = require('./router')

const app = new Koa()

app.use(router.routes())

app.on('error', (err) => {
  if (err) {
    logger.error('Server error', { error: err.message })
  } else {
    logger.info('Koa server is up and running!')
  }
})

module.exports = app
