'use strict'

const express = require('express')
const app = express()

require('dotenv').load()
const routes = require('./app/routes/index.js')

routes(app)

let port = process.env.PORT || 3003
app.listen(port, () => {
	console.log('Node.js listening on port ' + port + '...')
})