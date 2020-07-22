export {};
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
const express = require("express");
// const path = require("path");
// // const passportSetup = require("../../src/server/config/passport-setup");
// const passport = require("passport");
require("dotenv/config");
require('dotenv');
const mongoose = require('mongoose');
const app = express();
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// app.use(cors());

// Bring in routes

// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(cookieParser());


app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Nothing here yet')
});

// CONNECT TO MONGO DB
mongoose.connect("mongodb+srv://louis-givengo:evee3833@givengo-data.rw3gb.azure.mongodb.net/givengo-data?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log('connected to database!')
});

mongoose.connection.on('error', (err) =>{
  console.log('ERROR CONNECTING TO DATABASE: ', err);
});

app.use('/signup')

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
