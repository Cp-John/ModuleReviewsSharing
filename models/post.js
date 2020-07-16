const mongoose = require('./db');

var postSchema = mongoose.Schema({
    moduleInfo: {
        moduleCode: String,
        title: String,
        prof: String,
        acadYear: String,
        semester: String
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
    headerImage: String,
    date: String,
    time: String,
    numOfLikes: Number,
    numOfDislikes: Number,
    numOfShares: Number,
})

var Post = mongoose.model('Post', postSchema, 'postList');

module.exports = Post;