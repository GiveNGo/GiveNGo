const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  karma: {
    type: Number,
    required: true,
  },
  tasks: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);

// const testUser = {
//   username: 'cherie',
//   email: 'cherie@codesmith.io',
//   password: '123',
//   karma: 5,
//   // tasks: [],
// };

// const newTest = new User(testUser);

// newTest.save((err) => {
//   if (err) {
//     console.log(err);
//   } else console.log('added to DB');
// });

// module.exports = User;
