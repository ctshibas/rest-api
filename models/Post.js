const mongoose = require('mongoose')


// creating schema for our database - info will be stored
const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Posts', PostSchema);
