const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Wealth Inequality: UK Top 100 Wealthiest
const uktophundredwealthiestSchema = new Schema(
  {
    'source': {
      type: String,
      required: true
    },
    'year': {
      type: Number,
      required: true
    },
    'rank': {
      type: Number,
      required: true
    },
    'net_worth_bln_gbp': {
      type: Number,
      required: true
    },
    'name': {
      type: String,
      required: true
    },
    'citizenship': {
      type: String,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('uk_top_100_wealthiests', uktophundredwealthiestSchema);
