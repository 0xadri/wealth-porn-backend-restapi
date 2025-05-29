const { validationResult } = require("express-validator");

const UkTopHundredWealthiests = require('../models/ukTopHundredWealthiests');
const UkTopWealthDistro = require('../models/ukTopWealthDistro');
const UkBottomWealthDistro = require('../models/ukBottomWealthDistro');
const LdnResidentialRealEstateInvestments = require('../models/ldnResidentialRealEstateInvestments');
const UkGiniCoefficient = require('../models/ukGiniCoefficient');
const LdnBottomWealthDistro = require('../models/ldnBottomWealthDistro');


exports.getUkTopHundredWealthiests = (req, res, next) => {
  UkTopHundredWealthiests.find()
    .then(topHundredRichest => {
      res.status(200).json({message: 'Fetched successfully. Yay!', topHundredRichest: topHundredRichest})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getUkTopWealthDistro = (req, res, next) => {
  UkTopWealthDistro.find()
    .exec()
    .then(topWealthDistro => {
      res.status(200).json({message: 'Fetched successfully. Yay!', topWealthDistro: topWealthDistro})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getUkBottomWealthDistro = (req, res, next) => {
  UkBottomWealthDistro.find()
    .then(bottomWealthDistro => {
      res.status(200).json({'message': 'Fetched successfully. Yay!', 'bottomWealthDistro': bottomWealthDistro})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getLdnResidentialRealEstateInvestments = (req, res, next) => {
  LdnResidentialRealEstateInvestments.find()
    .then(resRealEstateInv => {
      res.status(200).json({'message': 'Fetched successfully. Yay!', 'ldnResRealEstateInv': resRealEstateInv})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getUkGiniCoefficient = (req, res, next) => {
  UkGiniCoefficient.find()
    .then(giniCoefficients => {
      res.status(200).json({'message': 'Fetched successfully. Yay!', 'giniCoefficients': giniCoefficients})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getLdnBottomWealthDistro = (req, res, next) => {
  LdnBottomWealthDistro.find()
    .then(giniCoefficients => {
      res.status(200).json({'message': 'Fetched successfully. Yay!', 'giniCoefficients': giniCoefficients})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};
