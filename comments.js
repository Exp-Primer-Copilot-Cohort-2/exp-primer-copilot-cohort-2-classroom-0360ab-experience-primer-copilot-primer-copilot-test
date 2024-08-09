// Create web server
// npm install express
// npm install body-parser
// npm install cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const comments = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(comments[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const id = require('crypto').randomBytes(4).toString('hex');
    const { content } = req.body;

    const postComments = comments[req.params.id] || [];

    postComments.push({ id, content });
    comments[req.params.id] = postComments;

    res.status(201).send(postComments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});