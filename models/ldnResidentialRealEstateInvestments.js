const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Housing Ownership Inequality: LDN Residential Real Estate Investments
const ldnresidentialrealestateinvSchema = new Schema(
  {
    'source': {
      type: String,
      required: true
    },
    'year': {
      type: Number,
      required: true
    },
    'total_invested_bln_gbp': {
      type: Number,
      required: true
    },
    'indiv_vs_corpo_buyers_percent': {
      type: Number,
      required: true
    },
    'corpo_vs_indiv_buyers_percent': {
      type: Number,
      required: true
    },
    'local_vs_foreign_corpo_buyers_percent': {
      type: Number,
      required: true
    },
    'foreign_vs_local_corpo_buyers_percent': {
      type: Number,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('ldn_residential_real_estate_investments', ldnresidentialrealestateinvSchema);
