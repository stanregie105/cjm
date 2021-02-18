const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  firstname: {
    type: String
   
  },
  lastname: {
    type: String
    
  },
  telephone: {
    type: Number
    
  },
  email: {
    type: String,
    unique: true
    
  },
 
  order: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('order', OrderSchema);