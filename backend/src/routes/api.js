const express = require('express');
const router = express.Router();
const { getHealth, getTest, postTest } = require('../controllers/apiController');

router.get('/health', getHealth);
router.get('/api/test', getTest);
router.post('/api/test', postTest);

module.exports = router;
