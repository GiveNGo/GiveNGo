"use strict";
exports.__esModule = true;
var express = require("express");
var signupRoute = require('./routes/signupRoute');
var loginRoute = require('./routes/loginRoute');
var requestController = require('./controllers/requestController')
// require('dotenv').config();
var mongoose = require('mongoose');
var app = express();
// Bring in routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.status(200).send('Nothing here yet');
});
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
// app.post('/signup', authController.signUpUser, (req: Request, res: Response) => {
//   res.status(200).json(res.locals.newUser)
// })
// app.post('/login', authController.loginUser, (req: Request, res: Response) => {
//   res.status(200).json(res.locals.possibleUser)
// });
// CONNECT TO MONGO DB

app.get('/tasks', requestController.getTasks, (req, res) => {
  return res.status(200).json(res.locals.tasks);
});
// postRequest route
app.post(
  '/request',
  requestController.postRequest,
  (req, res) => {
    return res.status(200).json(res.locals.tasks);
  }
);

app.delete('/tasks/:id', requestController.deleteTask, (req,res) => {
  return res.status(200).json(res.locals.tasks)
});


mongoose.connect('mongodb+srv://louis-givengo:evee3833@givengo-data.rw3gb.azure.mongodb.net/givengo-data?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function () {
    console.log('connected to database!');
});
mongoose.connection.on('error', function (err) {
    console.log('ERROR CONNECTING TO DATABASE: ', err);
});
// Global Error handler
app.use(function (err, req, res, next) {
    // Set up default error
    var defaultError = {
        log: "Error caught in global error handler",
        status: 500,
        msg: {
            err: err
        }
    };
    // Update default error message with provided error if there is one
    var output = Object.assign(defaultError, err);
    res.send(output);
});
var PORT = 3001;
app.listen(PORT, function () { return console.log("Server running on port " + PORT); });


//ENVIRONMENT VARIABLES