// Create web server
// Create express instance
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Create comments array
let comments = [
    { id: 1, author: 'John Doe', text: 'Hello World' },
    { id: 2, author: 'Jane Doe', text: 'Hi, planet!' },
    { id: 3, author: 'John Smith', text: 'Hello, universe!' }
]

// Create comment counter
let commentCounter = comments.length

// Create function to find comment by id
function findCommentById(id) {
    return comments.find(comment => comment.id === id)
}

// Create function to find comment index by id
function findCommentIndexById(id) {
    return comments.findIndex(comment => comment.id === id)
}

// Create function to validate comment
function validateComment(comment) {
    return comment.author && comment.text
}

// Create function to validate comment id
function validateCommentId(id) {
    return typeof id === 'number'
}

// Create function to validate comment index
function validateCommentIndex(index) {
    return index >= 0 && index < comments.length
}

// Create function to validate comment id in array
function validateCommentIdInArray(id) {
    return findCommentById(id)
}

// Create function to validate comment index in array
function validateCommentIndexInArray(index) {
    return findCommentIndexById(index)
}

// Create function to get all comments
app.get('/comments', (req, res) => {
    res.json(comments)
})

// Create function to get comment by id
app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const comment = findCommentById(id)

    if (validateCommentIdInArray(id)) {
        res.json(comment)
    } else {
        res.status(404).json({ error: 'Comment not found' })
    }
})

// Create function to post comment
app.post('/comments', bodyParser.json(), (req, res) => {
    const comment = req.body

    if (validateComment(comment)) {
        commentCounter++
        comment.id = commentCounter
        comments.push(comment)
        res.status(201).json(comment)
    } else {
        res.status(400).json({ error: 'Invalid comment' })
    }
})

// Create function to