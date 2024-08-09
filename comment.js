// Create web server
const express = require("express");
const app = express();
// Create a port
const port = 3000;
// Create a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Listen to the port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// Run the web server
// node comment.js