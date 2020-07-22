const express = require('express');
const Post = require('../models/post');

var router = express.Router();

router.get('/', (req, res) => {
    Post.aggregate([
        {
            $lookup: {
                from: 'reportList',
                localField: '_id',
                foreignField: 'postId',
                as: 'reportList'
            }
        },
    ], (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.get('/count', (req, res) => {
    Post.countDocuments((err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(result);
    })
})

router.get('/:moduleCode', (req, res) => {
    Post.aggregate([
        {
            $lookup: {
                from: 'reportList',
                localField: '_id',
                foreignField: 'postId',
                as: 'reportList'
            },
        },
        {
            $match: {
                'moduleInfo.moduleCode': req.params.moduleCode
            }
        }
    ], (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.get('/:moduleCode/count', (req, res) => {
    Post.find({ "moduleInfo.moduleCode": req.params.moduleCode }).countDocuments((err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(result);
    })
})

router.post('/', (req, res) => {
    var post = req.body;
    new Post({
        moduleInfo: {
            moduleCode: post.moduleInfo.moduleCode,
            title: post.moduleInfo.title,
            prof: post.moduleInfo.prof,
            acadYear: post.moduleInfo.acadYear,
            semester: post.moduleInfo.semester
        },
        reviewAndRatings: {
            review: post.reviewAndRatings.review,
            general: post.reviewAndRatings.general,
            difficulty: post.reviewAndRatings.difficulty,
            workload: post.reviewAndRatings.workload,
            recommend: post.reviewAndRatings.recommend,
        },
        extraInfo: {
            gradeExpected: post.extraInfo.gradeExpected,
            gradeObtained: post.extraInfo.gradeObtained
        },
        headerImage: post.headerImage,
        date: post.date,
        time: post.time,
        numOfDislikes: post.numOfDislikes,
        numOfLikes: post.numOfLikes,
        numOfShares: post.numOfShares,
    }).save((err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(data);
    })
})

router.delete('/delete/:postId', (req, res) => {
    Post.findOneAndDelete({ _id: req.params.postId }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/like/:postId', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.postId }, { $inc: { numOfLikes: 1 } }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/like/cancel/:postId', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.postId }, { $inc: { numOfLikes: -1 } }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/dislike/:postId', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.postId }, { $inc: { numOfDislikes: 1 } }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/dislike/cancel/:postId', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.postId }, { $inc: { numOfDislikes: -1 } }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/share/:postId', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.postId }, { $inc: { numOfShares: 1 } }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

module.exports = router;