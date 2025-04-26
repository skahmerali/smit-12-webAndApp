const express = require('express');
const router = express.Router();
const authMiddleware = require('./middleware/upload.js');
const filUpload = require('./fileUpload.js');

module.exports = router;