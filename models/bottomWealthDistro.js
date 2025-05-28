const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Bottom Wealth Distribution, by EqualityTrust and ONS
const bottomwealthdistroSchema = new Schema(
  {
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
