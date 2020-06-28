const Module = require('../models/module');
const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    Module.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(docs);
    })
})

module.exports = router;