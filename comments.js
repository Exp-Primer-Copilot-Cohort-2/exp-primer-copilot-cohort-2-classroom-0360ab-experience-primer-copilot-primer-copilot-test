// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comments = [];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (pathname === '/comments') {
        if (req.method === 'GET') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(comments));
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                const comment = JSON.parse(body);
                comments.push(comment);
                res.statusCode = 201;
                res.end(JSON.stringify(comment));
            });
        } else {
            res.statusCode = 404;
            res.end('Not Found');
        }
    } else {
        fs.readFile(path.join(__dirname, pathname), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                const ext = path.extname(pathname).substr(1);
                res.statusCode = 200;
                res.setHeader('Content-Type', `text/${ext}`);
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running');
});