// Create web server
const express = require('express');
const comments = require('./comments');
const app = express();
const port = 3000;

// Use the comments module
app.use('/comments', comments);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});