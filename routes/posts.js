const express = require('express');
const Post = require('../models/post');

var router = express.Router();

router.get('/', (req, res) => {
    Post.find({}, (err, docs) => {
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
    Post.find({ "moduleInfo.moduleCode": req.params.moduleCode }, (err, docs) => {
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
    new Post(post).save((err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(data);
    })
})

router.put('/like/:postId', (req, res) => {
    Post.findOneAndUpdate({id: req.params.postId}, { $inc: {numOfLikes: 1}}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/like/cancel/:postId', (req, res) => {
    Post.findOneAndUpdate({id: req.params.postId}, { $inc: {numOfLikes: -1}}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/dislike/:postId', (req, res) => {
    Post.findOneAndUpdate({id: req.params.postId}, { $inc: {numOfDislikes: 1}}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/dislike/cancel/:postId', (req, res) => {
    Post.findOneAndUpdate({id: req.params.postId}, { $inc: {numOfDislikes: -1}}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.put('/share/:postId', (req, res) => {
    Post.findOneAndUpdate({id: req.params.postId}, { $inc: {numOfShares: 1}}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

module.exports = router;