// create web server 
// http://localhost:3000/comments
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function (req, res) {
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.post('/comments', function (req, res) {
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["comments"].push(req.body);
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
// end of comments.js