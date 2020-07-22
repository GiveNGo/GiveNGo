export { };
import { Request, Response, NextFunction } from "express";
const User = require('../models/userSchema');
import CryptoJS = require("crypto-js");

const authController: any = {};

// Middleware to get username and access token from passport-setup.js's done callback (payload)
authController.initializeUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Destructure username/accessToken from req.user
  const { username, password, email }: { username: string, password: string, email: string } = req.body;

  // CryptoJS -> encrypt accessToken with AES and a "super_secret" password
  const encrypted = CryptoJS.AES.encrypt(
    password,
    "super_secret"
  ).toString();

  // const newUser = new User({
  //   username: username,
  //   email: email,
  //   password: encrypted,
  //   karma: 0,
  //   tasks: [{}]
  // });
    // newUser.save()
  //   .then(response => {
  //     console.log('saved user into database!')
  //   })

  User.create({
    username: username,
    email: email,
    password: encrypted,
    karma: 0,
    tasks: [{}]
  }).then(response => console.log('saved user into database! res: ', response));


  // error handling
  if (!(username || encrypted)) {
    return next({
      log: `Error caught in authContoller.saveAccessToken: Missing username: ${username} or encrypted: ${Boolean(encrypted)}`,
      msg: { err: 'authContoller.saveAccessToken: ERROR: Check server logs for details' }
    })
  }

  return next();
};

// Middleware to get username and access token from cookies and store each in locals
authController.checkUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Destructure username and token from cookies
  const { username, password, email }: { username: string, password: string, email: string } = req.body;

  // CryptoJS -> decrypt accessToken and convert back to original
  const decrypted = CryptoJS.AES.decrypt(password, "super_secret").toString(
    CryptoJS.enc.Utf8
  );

  // Store decrypted access token in locals
  res.locals.accessToken = decrypted;

  // Store username in locals
  res.locals.username = username;

  // error handling
  if (!(decrypted || username)) {
    return next({
      log: `Error caught in authContoller.getNameAndTokenFromCookies: Missing ${username}, decrypt: ${Boolean(decrypted)}`,
      msg: { err: 'authController.getNameAndTokenFromCookies: ERROR: Check server logs for details' }
    });
  }

  return next();
};

module.exports = authController;