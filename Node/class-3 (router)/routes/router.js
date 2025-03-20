const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/ageChecker');
const loginController = require('../controllers/login');
const errorController = require('../controllers/404');

// User Login Route (Uses Middleware)
router.post('/user', authMiddleware.checkAge, loginController.loginUser);

// 404 Route
router.get('/404', errorController.handle404);

module.exports = router;
