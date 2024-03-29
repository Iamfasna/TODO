const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model('ToDo', todoSchema)