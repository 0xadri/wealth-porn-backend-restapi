const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Residential Real Estate Investments in London - source: chatgpt estimates
const residentialrealestateinvSchema = new Schema(
  {
    "year": {
      type: Number,
      required: true
    },
    "Total Invested in GBP": {
      type: Number,
      required: true
    },
    "% Individual vs Corporate Buyers": {
      type: Number,
      required: true
    },
    "% Corporate Buyers vs Individual": {
      type: Number,
      required: true
    },
    "% Local vs Foreign Corporate Buyers": {
      type: Number,
      required: true
    },
    "% Foreign vs Local Corporate Buyers": {
      type: Number,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('ldn-residential-real-estate-investments', residentialrealestateinvSchema);
