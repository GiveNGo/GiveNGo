export {};
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'User',
  },
  assignee: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: 'User',
  },
  taskBody: {
    type: String,
    required: true,
  },
  taskType: {
    type: String,
    required: true,
  },
  fulfilled: {
    type: Boolean,
    required: true,
  },
});

// const testTask = {
//   taskBody: 'need avocados!',
//   taskType: 'Grocery',
//   fulfilled: false,
// };

// mongoose.models.create({ testTask });

module.exports = mongoose.model('Task', taskSchema);
