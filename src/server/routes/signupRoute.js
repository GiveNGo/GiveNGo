"use strict";
exports.__esModule = true;
const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/', authController.signUpUser, function (req, res) {
    res.status(200).json(res.locals.newUser);
});
module.exports = router;