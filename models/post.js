const mongoose = require('./db');

var postSchema = mongoose.Schema({
    moduleInfo: {
        moduleCode: String,
        title: String,
        prof: String,
        acadYear: String
    },
    reviewAndRatings: {
        review: String,
        general: Number,
        difficulty: Number,
        workload: Number,
        recommend: Number,
    },
    extraInfo: {
        gradeExpected: String,
        gradeObtained: String
    },
    date: String,
    time: String,
    id: {
        type: Number,
        unique: true
    },
    numOfLikes: Number,
    numOfDislikes: Number,
    numOfShares: Number,
})

var Post = mongoose.model('Post', postSchema, 'postList');

module.exports = Post;