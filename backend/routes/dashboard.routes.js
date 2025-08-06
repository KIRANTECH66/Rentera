const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

// This route would be protected and only accessible by the authenticated user.
// GET /api/dashboard/landlord/:userId
router.get('/landlord/:userId', dashboardController.getLandlordDashboard);

module.exports = router;
