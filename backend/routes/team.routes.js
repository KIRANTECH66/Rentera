const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');

// This route would be protected and only accessible by an authenticated landlord.
// POST /api/team/add-manager
router.post('/add-manager', teamController.addManager);

module.exports = router;
