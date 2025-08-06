const express = require('express');
const router = express.Router();
const documentController = require('../controllers/document.controller');

// This route simulates uploading a document by creating its record.
// POST /api/documents/upload
router.post('/upload', documentController.uploadDocument);

module.exports = router;
