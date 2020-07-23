export {};
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
const express = require("express");
const signupRoute = require('./routes/signupRoute');
const loginRoute = require('./routes/loginRoute');
// require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

// Bring in routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Nothing here yet')
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
mongoose.connect('mongodb+srv://louis-givengo:evee3833@givengo-data.rw3gb.azure.mongodb.net/givengo-data?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log('connected to database!')
});

mongoose.connection.on('error', (err) =>{
  console.log('ERROR CONNECTING TO DATABASE: ', err);
});

// Global Error handler
app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Set up default error
    const defaultError = {
      log: "Error caught in global error handler",
      status: 500,
      msg: {
        err: err,
      },
    };

    // Update default error message with provided error if there is one
    const output = Object.assign(defaultError, err);
    res.send(output);
  }
);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
