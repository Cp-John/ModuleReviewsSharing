const mongoose = require('./db');

var answerSchema = mongoose.Schema({
    content: String,
    date: String,
    time: String,
    questionId: {
        type: mongoose.Types.ObjectId,
        index: true
    }
})

var Answer = mongoose.model('Answer', answerSchema, 'answerList');

module.exports = Answer;