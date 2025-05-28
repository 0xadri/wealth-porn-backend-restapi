const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Bottom Wealth Distribution
const bottomwealthdistroSchema = new Schema(
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

module.exports = mongoose.model('bottom-wealth-distros', bottomwealthdistroSchema);
