// Create web server
// Load express module
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Load comments.json file
var comments = require('./comments.json');

// Route to get all comments
app.get('/comments', function (req, res) {
  res.end( JSON.stringify(comments) );
});

// Route to get a comment by id
app.get('/comments/:id', function (req, res) {
  // Search for the comment by id
  var comment = comments.filter(function(comment){
    return comment.id == req.params.id;
  });
  // If comment not found, return a 404 error
  if(comment.length == 0){
    res.statusCode = 404;
    return res.send('Error 404: No comment found');
  }
  // Return the comment
  res.end( JSON.stringify(comment) );
});

// Route to create a comment
app.post('/comments', urlencodedParser, function (req, res) {
  // If POST data is empty, return a 400 error
  if(!req.body) {
    return res.sendStatus(400);
  }
  // Create a new comment
  var newComment = {
      id: Date.now()
  };
});