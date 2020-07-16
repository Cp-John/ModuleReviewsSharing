const express = require('express');
const Answer = require('../models/answer');
const mongoose = require('../models/db');

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
    var newAns = new Answer({
        content: answer.content,
        date: answer.date,
        time: answer.time,
        questionId: mongoose.Types.ObjectId(answer.questionId)
    });
    newAns.save((err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(data);
    })
})

router.delete('/delete/:_id', (req, res) => {
    Answer.findOneAndDelete({ _id: req.params._id }, (err, docs) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(docs);
    })
})

module.exports = router;