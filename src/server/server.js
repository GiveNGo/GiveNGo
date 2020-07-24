const express = require("express");
const signupRoute = require('./routes/signupRoute');
const loginRoute = require('./routes/loginRoute');
const taskRoute = require('./routes/taskRoute');
const mongoose = require('mongoose');
const app = express();

// Bring in routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.status(200).send('welcome to Give N Go');
});

app.get('/fail', (req, res) => {
  res.status(200).send('FAILURE TO AUTHENTICATE');
})

app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/tasks', taskRoute);

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected',  () => {
  console.log('connected to database!');
});

mongoose.connection.on('error',  (err) => {
  console.log('ERROR CONNECTING TO DATABASE: ', err);
});


// Global Error handler
app.use(function (err, req, res, next) {
  // Set up default error
  const defaultError = {
    log: "Error caught in global error handler",
    status: 500,
    msg: {
      err: err
    }
  };
  // Update default error message with provided error if there is one
  const output = Object.assign(defaultError, err);
  res.send(output);
});

const PORT = 3001;
app.listen(PORT, function () { return console.log("Server running on port " + PORT); });