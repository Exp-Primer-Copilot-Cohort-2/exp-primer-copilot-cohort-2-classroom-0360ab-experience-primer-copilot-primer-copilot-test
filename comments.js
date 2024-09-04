//create web server
var express = require('express');
var app = express();
//create a route
app.get('/', function(req, res) {
    res.send('Hello World');
});
//start server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});


