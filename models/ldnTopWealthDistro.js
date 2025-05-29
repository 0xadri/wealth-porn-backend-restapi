const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Wealth Inequality: LDN Top Wealth Distribution
const ldntopwealthdistroSchema = new Schema(
  {
    'source': {
      type: String,
      required: true
    },
    'year': {
      type: Number,
      required: true
    },
    'population_top_percent': {
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

module.exports = mongoose.model('ldn_top_wealth_distros', ldntopwealthdistroSchema);
