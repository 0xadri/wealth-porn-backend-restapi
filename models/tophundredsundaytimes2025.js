const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tophundredSchema = new Schema(
  {
    rank: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    net_worth_billion_gbp: {
      type: Number,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    citizenship: {
      type: String,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('top100-2025-sundaytimes', tophundredSchema);
