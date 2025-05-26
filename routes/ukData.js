const express = require('express');
const { body } = require('express-validator');

const ukDataController = require('../controllers/ukData');

const router = express.Router();

// GET /uk-data/100-rich-list
router.get('/100-rich-list', ukDataController.getTopHundredSundayTimes2025);

// GET /uk-data/post/:postId
// router.get('/post/:postId', ukDataController.getPost);

module.exports = router;
