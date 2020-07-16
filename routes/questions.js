const express = require('express');
const Question = require('../models/question');
const mongoose = require('../models/db');
const Answer = require('../models/answer');

var router = express.Router();

router.get('/', (req, res) => {
    Question.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.get('/count', (req, res) => {
    Question.countDocuments((err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(result);
    })
})

router.get('/:moduleCode', (req, res) => {
    Question.aggregate([
        {
            $lookup: {
                from: 'answerList',
                localField: '_id',
                foreignField: 'questionId',
                as: 'answerList'
            }
        },
        {
            $match: {
                moduleCode: req.params.moduleCode
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
    Question.find({ "moduleInfo.moduleCode": req.params.moduleCode }).countDocuments((err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(result);
    })
})

router.post('/', (req, res) => {
    var question = req.body;
    new Question({
        content: question.content,
        date: question.date,
        time: question.time,
        moduleCode: question.moduleCode,
        id: question.id
    }).save((err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(data);
    })
})

router.delete('/delete/:questionId', (req, res) => {
    Answer.deleteMany({ questionId: req.params.questionId }, (err) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        Question.findOneAndDelete({ _id: req.params.questionId }, (err, docs) => {
            if (err) {
                console.log(err);
                res.json(err);
            }
            res.json(docs);
        })
    })
})

module.exports = router;