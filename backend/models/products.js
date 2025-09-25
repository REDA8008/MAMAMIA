const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['medicine', 'vitamins', 'supplements']
  },
  dosage: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true,
    default: 'MAD'
  },
  imageBase64: {
    type: String,
    required: true
  },
  imageType: {
  imageType: {
    type: String,
    required: true,
    default: 'image/jpeg'
  },    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Product', productSchema);