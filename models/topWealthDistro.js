const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Top Wealth Distribution
const topwealthdistroSchema = new Schema(
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
    'combined_wealth_bln_gbp': {
      type: Number,
      required: true
    },
    'notes': {
      type: String,
      required: false
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('top-wealth-distros', topwealthdistroSchema);
