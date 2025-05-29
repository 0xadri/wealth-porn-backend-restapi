const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Inequality Indicator: UK Gini Coefficient
const ukginicoefficientSchema = new Schema(
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

module.exports = mongoose.model('uk_gini_coefficients', ukginicoefficientSchema);
