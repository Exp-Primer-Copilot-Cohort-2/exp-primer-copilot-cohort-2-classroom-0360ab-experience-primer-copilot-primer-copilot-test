// create web server
const express = require('express');
const app = express();
const port = 3000;
// create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// listen on port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});