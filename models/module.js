const mongoose = require('./db');

var moduleSchema = mongoose.Schema({
    moduleCode: String,
    title: String,
    moduleCredit: String,
    department: String,
    faculty: String,
    description: String,
})

var Module = mongoose.model('Module', moduleSchema, 'moduleList');

module.exports = Module;