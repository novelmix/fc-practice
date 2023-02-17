const express = require('express');
const { STATIC_PATH } = require('./config/path.config');
const { errorHandler } = require('./error.handler');
const router = require('./routers');
const app = express();

app.use(express.json());
app.use(express.static(STATIC_PATH));
app.use('/api', router);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send({
    message: `Welcome to Web-Practical-API version 0.0.1`,
  });
});

module.exports = app;
