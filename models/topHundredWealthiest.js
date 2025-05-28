const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Top 100 Wealthiest
const tophundredSchema = new Schema(
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

module.exports = mongoose.model('top-100-wealthiests', tophundredSchema);
