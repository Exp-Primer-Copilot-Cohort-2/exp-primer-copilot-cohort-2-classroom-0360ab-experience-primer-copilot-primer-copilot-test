// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.json');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { body } = req;
  if (body && body.author && body.comment) {
    comments.push({
      id: comments.length + 1,