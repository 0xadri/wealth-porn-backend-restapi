const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Wealth Inequality: LDN Bottom Wealth Distribution
const ldnbottomwealthdistroSchema = new Schema(
  {
    'source': {
      type: String,
      required: true
    },
    'source_details': {
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
    'combined_wealth_percent': {
      type: Number,
      required: true
    },
    'combined_wealth_bln_gbp': {
      type: Number,
      required: true
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model('ldn_bottom_wealth_distros', ldnbottomwealthdistroSchema);
