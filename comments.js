// Creating web server to handle comments
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Array to store comments
const comments = [];

// Route to get all comments
app.get('/comments', function (req, res) {
    res.json(comments);
});

// Route to create a new comment
app.post('/comments', function (req, res) {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
