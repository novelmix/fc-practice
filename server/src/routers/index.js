const express = require('express');
const heroRouter = require('./hero.router')
const router = express.Router();

router.use('/hero', heroRouter)

module.exports = router;