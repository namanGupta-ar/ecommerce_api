const express = require('express');
const router = express.Router();
console.log("Router Loaded");

router.use('/products', require('./product'));
module.exports =  router;