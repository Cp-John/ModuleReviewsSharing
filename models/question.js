const mongoose = require('./db');

var questionSchema = mongoose.Schema({
    content: String,
    date: String,
    time: String,
    moduleCode: String,
    id: {
        type: Number,
        unique: true
    }
})

var Question = mongoose.model('question', questionSchema, 'questionList');

module.exports = Question;