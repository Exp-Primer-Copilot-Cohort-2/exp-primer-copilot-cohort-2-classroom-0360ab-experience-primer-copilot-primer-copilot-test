// Create web server
const express = require('express');
const app = express();
const port = 3000;

const comments = [
  {
    name: 'Stefan',
    message: 'Hello there!',
  },
  {
    name: 'John',
    message: 'How are you?',
  },
];