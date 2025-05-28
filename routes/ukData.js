const express = require('express');
const { body } = require('express-validator');

const ukDataController = require('../controllers/ukData');

const router = express.Router();

// GET /uk-data/100-rich-list
router.get('/wealth-top-100', ukDataController.getTopHundredWealthiest);

// GET /uk-data/top-wealth-distro
router.get('/top-wealth-distro', ukDataController.getTopWealthDistro);

// GET /uk-data/bottom-wealth-distro
router.get('/bottom-wealth-distro', ukDataController.getBottomWealthDistro);

// GET /uk-data/ldn-res-real-estate
router.get('/ldn-res-real-estate', ukDataController.getResidentialRealEstateInvestments);

// GET /uk-data/gini-coefficient
router.get('/gini-coefficient', ukDataController.getGiniCoefficient);

// GET /uk-data/post/:postId
// router.get('/post/:postId', ukDataController.getPost);

module.exports = router;
