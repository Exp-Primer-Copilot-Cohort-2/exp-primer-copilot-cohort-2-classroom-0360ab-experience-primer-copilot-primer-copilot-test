// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Require the module
const comments = require('./comments');

// Use the middleware
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.getCommentById(id);
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).end();
    }
});

// Create a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.createComment(comment);
    res.status(201).end();
});

// Update a comment
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = req.body;
    comments.updateComment(id, comment);
    res.status(200).end();
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments.deleteComment(id);
    res.status(204).end();
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

// Path: comments.js
// Create the module
let comments = [
    { id: 1, author: 'John', content: 'Hello' },
    { id: 2, author: 'Jane', content: 'Hi' }
];

// Export the module
module.exports = {
    getComments: () => comments,
    getCommentById: (id) => comments.find(comment => comment.id === id),
    createComment: (comment) => comments.push(comment),
    updateComment: (id, newComment) => {
        const index = comments.findIndex(comment => comment.id === id);
        comments[index] = newComment;
    },
    deleteComment: (id) => {
        comments = comments.filter(comment => comment.id !== id);
    }
};