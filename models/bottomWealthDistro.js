const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Bottom Wealth Distribution, by EqualityTrust and ONS
const bottomwealthdistroSchema = new Schema(
  {
    population_percentile_top: {
      type: String,
      required: true
    },
    combined_wealth_gbp: {
      type: Number,
      required: true
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model('bottom-wealth-distros', bottomwealthdistroSchema);
