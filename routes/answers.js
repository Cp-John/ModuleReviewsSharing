const express = require('express');
const Answer = require('../models/answer');

var router = express.Router();

router.get('/', (req, res) => {
    Answer.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.get('/:questionId', (req, res) => {
    Answer.find({ "questionId": req.params.questionId }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.post('/', (req, res) => {
    var answer = req.body;
    new Answer(answer).save((err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(data);
    })
})

module.exports = router;