// Creating web server with express
const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

// Use body parser
app.use(express.json());

// Use comments.js
const comments = require('./comments');

// Create a new comment
app.post('/comments', (req, res) => {
    // Create a new comment
    const comment = comments.createComment(req.body);
    res.json(comment);
});

// Get all comments
app.get('/comments', (req, res) => {
    const allComments = comments.getAllComments();
    res.json(allComments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
