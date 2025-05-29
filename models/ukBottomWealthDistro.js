const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Wealth Inequality: UK Bottom Wealth Distribution
const ukbottomwealthdistroSchema = new Schema(
  {
    'source': {
      type: String,
      required: true
    },
    'year': {
      type: Number,
      required: true
    },
    'population_bottom_percent': {
      type: String,
      required: true
    },
    'combined_wealth_bln_gbp': {
      type: Number,
      required: true
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model('uk_bottom_wealth_distros', ukbottomwealthdistroSchema);
