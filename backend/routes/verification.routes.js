const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verification.controller');

// In a real app, this route would be protected and only accessible by authenticated users.
// POST /api/verification/initiate
router.post('/initiate', verificationController.initiateLandlordCheck);

module.exports = router;
