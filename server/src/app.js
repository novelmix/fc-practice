const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: `Welcome to Web-Practical-API version 0.0.1`,
  });
});

module.exports = app;
