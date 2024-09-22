const mongoose = require('mongoose');

const packagesSchema = mongoose.Schema(
  {
    packageName: {
      type: String,
      required: true,
      trim: true,
    },
    packageDescription: {
      type: String,
      required: true,
    },
    stripeId: {
      type: String,
      required: true,
    },
    paypalId: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    listingType: {
      type: String,
      enum: ['rent', 'sale'],
    },
    type: {
      type: String,
      default: 'recurring',
    },
    subscriptionType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef User
 */
const Packages = mongoose.model('Packages', packagesSchema);

module.exports = Packages;
