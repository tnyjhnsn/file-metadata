'use strict'

const multer = require('multer')
const upload = multer()

module.exports = (app) => {

	app.route('/').get((req, res) => {
		res.sendFile(process.cwd() + '/public/index.html')
	})
	app.post('/upload', upload.single('file-upload'), (req, res) => {
		res.json({size: req.file.size})
	})
}
