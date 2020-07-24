const express = require("express");
const router = express.Router();
const authController = require('.');

router.post('/', 
authController.signUpUser, (req, res) => {
    res.status(200).json(res.locals.newUser);
});

module.exports = router;