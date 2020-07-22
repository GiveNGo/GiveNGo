"use strict";
exports.__esModule = true;
var express = require("express");
// const path = require("path");
// // const passportSetup = require("../../src/server/config/passport-setup");
// const passport = require("passport");
require("dotenv/config");
require('dotenv');
var mongoose = require('mongoose');
var app = express();
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// app.use(cors());
// Bring in routes
// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(cookieParser());
app.get('/', function (req, res) {
    res.status(200).send('Nothing here yet');
});
// CONNECT TO MONGO DB
mongoose.connect("mongodb+srv://louis-givengo:evee3833@givengo-data.rw3gb.azure.mongodb.net/givengo-data?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
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
