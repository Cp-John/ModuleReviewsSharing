const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const modules = require('./routes/modules.js');
const posts = require('./routes/posts.js');
const answers = require('./routes/answers.js');
const questions = require('./routes/questions.js');
const adminAccounts = require('./routes/adminAccounts.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./dist/nusmods'));

app.use('/modules', modules);
app.use('/posts', posts);
app.use('/answers', answers);
app.use('/questions', questions);
app.use('/adminAccounts', adminAccounts);

app.get('/Module', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})
app.get('/Module/Description', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})
app.get('/Module/QuestionList', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})
app.get('/Module/ReviewList', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})
app.get('/AdminAccountLogin', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})
app.get('/AdminAccountCreate', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})

app.get('/ModuleList', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})

app.get('/LatestPosts', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})

app.get('/PostReview', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})

app.get('/MyModules', (req, res) => {
    res.sendFile(__dirname + '/dist/nusmods/index.html');
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/views/not-found.html');
})

app.listen(port, () => {
    console.log("You are listening to port " + port);
})