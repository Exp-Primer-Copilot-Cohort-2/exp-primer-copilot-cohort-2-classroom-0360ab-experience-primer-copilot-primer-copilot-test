// Create web server


// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create web server
const app = express();
app.use(bodyParser.json());

// Read comments from file
let comments = [];
fs.readFile('comments.json', 'utf8', (err, data) => {
    if (!err) {
        comments = JSON.parse(data);
    }
});

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            res.status(500).send('Error saving comment');
        } else {
            res.status(201).send('Comment added');
        }
    });
});

// Start web server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

// End of file