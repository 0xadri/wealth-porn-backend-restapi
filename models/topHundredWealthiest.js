const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Top 100 Rich List, by Sunday Times
const tophundredSchema = new Schema(
  {
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
    },
    'source': {
      type: String,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('top100-sundaytimes', tophundredSchema);
