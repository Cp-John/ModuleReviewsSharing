const AdminAccount = require('../models/adminAccount');
const express = require('express');

var router = express();

router.get('/', (req, res) => {
    AdminAccount.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(docs);
    })
})

router.get('/:accountName', (req, res) => {
    AdminAccount.find({accountName: req.params.accountName}, (err, docs) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(docs);
    })
})

router.post('/create', (req, res) => {
    var adminAccount = req.body;
    new AdminAccount(adminAccount).save((err, docs) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(docs);
    })
})

module.exports = router;