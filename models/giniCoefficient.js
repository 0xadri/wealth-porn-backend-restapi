const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Gini Coefficient
const giniCoefficientSchema = new Schema(
  {
    'source': {
      type: String,
      required: true
    },
    'year': {
      type: Number,
      required: true
    },
    'gini_coefficient': {
      type: Number,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('gini_coefficients', giniCoefficientSchema);
