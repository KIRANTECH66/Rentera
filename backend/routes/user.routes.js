const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define the registration route
// POST /api/users/register
router.post('/register', userController.register);

// Define the login route
// POST /api/users/login
router.post('/login', userController.login);

module.exports = router;
