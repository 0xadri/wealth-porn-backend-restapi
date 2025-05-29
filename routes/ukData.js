const express = require('express');
const { body } = require('express-validator');

const ukDataController = require('../controllers/ukData');

const router = express.Router();

// GET /uk-data/uk-wealth-top-100
router.get('/uk-wealth-top-100', ukDataController.getUkTopHundredWealthiests);

// GET /uk-data/uk-top-wealth-distro
router.get('/uk-top-wealth-distro', ukDataController.getUkTopWealthDistro);

// GET /uk-data/uk-bottom-wealth-distro
router.get('/uk-bottom-wealth-distro', ukDataController.getUkBottomWealthDistro);

// GET /uk-data/ldn-res-real-estate
router.get('/ldn-res-real-estate', ukDataController.getLdnResidentialRealEstateInvestments);

// GET /uk-data/uk-gini-coef
router.get('/uk-gini-coef', ukDataController.getUkGiniCoefficient);

// GET /uk-data/ldn-bottom-wealth-distro
router.get('/ldn-bottom-wealth-distro', ukDataController.getLdnBottomWealthDistro);

// GET /uk-data/ldn-top-wealth-distro
router.get('/ldn-top-wealth-distro', ukDataController.getLdnTopWealthDistro);

module.exports = router;
