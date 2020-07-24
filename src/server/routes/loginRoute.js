const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/', authController.loginUser,  (req, res) => {
    res.status(200).json(res.locals.possibleUser);
});

module.exports = router;
