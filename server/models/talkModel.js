const mongoose = require('mongoose');

const TalkSchema = new mongoose.Schema({
  firstname: {
    type: String
   
  },
 
  email: {
    type: String,
    unique: true
    
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('talk', TalkSchema);