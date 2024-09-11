// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

// Read comments from file
const readComments = () => {
  const comments = fs.readFileSync('./comments.json');
  return JSON.parse(comments);
};

// Write comments to file
const writeComments = (comments) => {
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
};

// GET /comments
app.get('/comments', (req, res) => {
  const comments = readComments();
  res.send(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comments = readComments();
  comments.push(req.body);
  writeComments(comments);
  res.send(comments);
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});