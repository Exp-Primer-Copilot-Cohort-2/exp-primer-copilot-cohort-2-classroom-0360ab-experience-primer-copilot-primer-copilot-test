// Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Create an array of comments
let comments = [
    {name: 'John', comment: 'Hello World'},
    {name: 'Jane', comment: 'Hi there'}
];

// Set up the template engine
app.set('view engine', 'ejs');

// Set up the static folder for the front-end
app.use(express.static('public'));

// Set up the body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Set up the route for the home page
app.get('/', (req, res) => {
    res.render('index.ejs', {comments: comments});
});

// Set up the route for the form submission
app.post('/comment', (req, res) => {
    comments.push({name: req.body.name, comment: req.body.comment});
    res.render('index.ejs', {comments: comments});
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});