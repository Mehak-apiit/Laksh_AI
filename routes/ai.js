const express = require('express');
const { protect } = require('../middleware/auth');
const { analyzeResume, getCareerAdvice } = require('../controllers/aiController');

const router = express.Router();

// Protect all AI routes
router.use(protect);

// Resume analysis
router.post('/resume-analysis', analyzeResume);

// Career advice
router.post('/career-advice', getCareerAdvice);

module.exports = router;