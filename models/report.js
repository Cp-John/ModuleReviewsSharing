const mongoose = require('./db');

var reportSchema = mongoose.Schema({
    content: String,
    date: String,
    time: String,
    postId: mongoose.Types.ObjectId,
})

var Report = mongoose.model('Report', reportSchema, 'reportList');

module.exports = Report;