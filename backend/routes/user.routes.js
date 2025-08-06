const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define the registration route
// POST /api/users/register
router.post('/register', userController.register);

// In the future, other user-related routes would be added here
// e.g., router.post('/login', userController.login);

module.exports = router;
