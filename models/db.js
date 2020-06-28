const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nusmods', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, 
    (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Successful connection to database');
    })

module.exports = mongoose;