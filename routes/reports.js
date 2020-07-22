const express = require('express');
const Report = require('../models/report');
const mongoose = require('../models/db');

var router = express.Router();

router.get('/', (req, res) => {
    Report.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

router.post('/', (req, res) => {
    var report = req.body;
    new Report({
        content: report.content,
        date: report.date,
        time: report.time,
        postId: mongoose.Types.ObjectId(report.postId),
    }).save((err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(data);
    })
})

router.delete('/delete/:reportId', (req, res) => {
    Report.findOneAndDelete({ _id: req.params.reportId }, (err, docs) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(docs);
    })
})

module.exports = router;