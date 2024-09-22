//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const url = require('url');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine', 'ejs');

let comments = [];

app.get('/comments', (req, res) => {
    res.render('comments', {comments: comments});
});

app.post('/comments', (req, res) => {
    let comment = req.body.comment;
    comments.push(comment);
    res.render('comments', {comments: comments});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});