const mongoose = require('./db');

var adminAccountSchema = mongoose.Schema({
    accountName: {
        type: String,
        index: true,
        unique: true
    },
    password: String
})

var AdminAccount = mongoose.model('AdminAccount', adminAccountSchema, 'adminAccountList');

module.exports = AdminAccount;