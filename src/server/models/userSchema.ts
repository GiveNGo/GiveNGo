export {};
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  Karma: { type: Number, required: true},
  Tasks: [
    {
      type: mongoose.Types.ObjectId, require: true, ref: 'Task'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);