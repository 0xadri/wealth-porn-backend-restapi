const { validationResult } = require("express-validator");

const TopHundred = require('../models/topHundredWealthiest');
const TopWealthDistroModel = require('../models/topWealthDistro');
const BottomWealthDistroModel = require('../models/bottomWealthDistro');

exports.getTopHundredSundayTimes2025 = (req, res, next) => {
  TopHundred.find()
    .then(topHundredRichest => {
      res.status(200).json({message: 'Fetched successfully', topHundredRichest: topHundredRichest})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getTopWealthDistro = (req, res, next) => {
  TopWealthDistroModel.find()
    .exec()
    .then(topWealthDistro => {
      res.status(200).json({message: 'Fetched successfully', topWealthDistro: topWealthDistro})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getBottomWealthDistro = (req, res, next) => {
  BottomWealthDistroModel.find()
    .then(bottomWealthDistro => {
      res.status(200).json({'message': 'Fetched successfully', 'bottomWealthDistro': bottomWealthDistro})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};
