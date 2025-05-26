const { validationResult } = require("express-validator");

const Post = require('../models/tophundredsundaytimes2025');

exports.getTopHundredSundayTimes2025 = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.status(200).json({message: 'Fetched successfully', posts: posts})
    })
    .catch(err => {
      if (!err.statusCode){
        err.statusCode = 500;
      }
      next(err);
    });
};