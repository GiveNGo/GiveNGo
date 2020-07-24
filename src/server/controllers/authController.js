// import { Request, Response, NextFunction } from "express";
const CryptoJS = require("crypto-js");
const User = require('../models/userSchema')

const authController = {};

// Middleware to get username and access token from passport-setup.js's done callback (payload)
authController.signUpUser = async (
  req,
  res,
  next
) => {
  console.log('INSIDE SIGNUP USER')
  // Destructure username/accessToken from req.user
  const { username, email, password } = req.body;

  const checkEmail = await User.collection.findOne({
    "email": email
  })

  if(checkEmail) res.redirect('/fail')

  // CryptoJS -> encrypt password with AES and a "super_secret" password
  const encrypted = CryptoJS.AES.encrypt(
    password,
    "super_secret"
  ).toString();

  // Save new user to database
  const newUser = await User.create({
    username: username,
    email: email,
    password: encrypted,
    karma: 0,
    // tasks: []
  })

  res.locals.newUser = newUser;

  // error handling
  if (!(username || encrypted)) {
    return next({
      log: `Error caught in authContoller.signUpUser: Missing username: ${username} or encrypted: ${Boolean(encrypted)}`,
      msg: { err: 'authContoller.signUpUser: ERROR: Check server logs for details' }
    })
  }

  return next();
};

authController.loginUser = async (
  req,
  res,
  next
) => {
  const { username, email, password } = req.body;

  const possibleUser = await User.collection.findOne({
    "username": username
  });

  if (!possibleUser) res.redirect('/fail');

  res.locals.possibleUser = possibleUser;

  const dbPwd = CryptoJS.AES.decrypt(possibleUser.password, "super_secret").toString(
    CryptoJS.enc.Utf8
  );

  if (password == dbPwd) {
    return next();
  } else {
    res.redirect('/fail');
  }

  // error handling
  if (!(dbPwd || username || password)) {
    return next({
      log: `Error caught in authContoller.loginUser: Missing ${username}, decrypt: ${Boolean(decrypted)}`,
      msg: { err: 'authController.loginUser: ERROR: Check server logs for details' }
    });
  }
};

module.exports = authController;